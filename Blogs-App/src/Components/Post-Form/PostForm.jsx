import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Dropdown, RTE } from '../index';
import appwriteService from '../../appwrite/configService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostForm({post}) {

    const navigate = useNavigate();

    const {register, handleSubmit, control, watch, setValue, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    });

    const userData = useSelector( (state)  => state.auth.userData);

    const formSubmitHandler = async(data) => {
        //Case 1: There is a value of 'post' and we are using this form for update/edit blog contents.
        if(post) {
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) :  null;

            // If file is uploaded then delete the previous file
            if(file) appwriteService.deleteFile(post.featuredImage);

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            });

            if(dbPost) navigate(`/post/${dbPost.$id}`)
            
        }
        //Case 2: There is no value of post and we are using this form for creating new blog.
        else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if(file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId : userData.$id
                });

                if(dbPost) navigate(`/post/${dbPost.$id}`)
            }
        }
    }


    const slugTransform = useCallback( (value) => {
        if(value && typeof value === 'string'){
            return value
                    .trim()
                    .toLowerCase()
                    .replace(/^[a-zA-Z\d]+/g, '-')
        }

        return '';
    }, [])

    useEffect( () => {
        const subscription = watch( (value, {name}) => {
            if(name === 'title') {
                setValue('slug', slugTransform(value.title, {shouldValidate: true}))
            }
        } );

        return () => {
            subscription.unsubscribe();
        }
    }, [watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />

                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>


            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />

                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <Dropdown
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm