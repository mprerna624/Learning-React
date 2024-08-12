import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/configService';
import { Container, PostCard } from '../Components';

function AllPosts() {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        appwriteService.getActivePosts([]).then( (posts) => {
                if(posts) {
                    setPosts(posts.documents)
                }
            } )
    }, [] )

  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                {
                    posts.map( (eachPost) => {
                        <div className="py-2 w-1/4" key={eachPost.$id} >
                            <PostCard post={eachPost} />
                        </div>
                    } )
                }
            </div>
        </Container>
    </div>
  )
}

export default AllPosts