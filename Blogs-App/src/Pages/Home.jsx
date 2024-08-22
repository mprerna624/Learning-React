import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/configService';
import { Container, PostCard } from '../Components';
import { useSelector } from 'react-redux';

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        appwriteService.getActivePosts().then( (posts) => {
            if(posts) {
                setPosts(posts.documents);
            }
        } )
    }, [])

    const status = useSelector((state) => state.auth.status);

  if(posts.length === 0) {
    if(status){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-6 w-full">
                            <h1 className="text-5xl font-bold hover:text-gray-500">
                                Welcome to our Blogs App - WriteWise!
                            </h1>
                            <p className='mt-12 text-xl leading-loose'>Looks like there are no posts here. <br />Feel free to add some of your own creative blogs!</p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } else {
    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-6 w-full">
                        <h1 className="text-5xl font-bold hover:text-gray-500">
                            Welcome to our Blogs App - WriteWise! 
                        </h1>
                        <p className='my-12 text-xl leading-loose'> Login and explore some blogs of your interest. <br /> And feel free to add some of your own creative blogs.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
  }

  return (
    <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                        ))
                    }
                </div>
            </Container>
        </div>
  )
}

export default Home