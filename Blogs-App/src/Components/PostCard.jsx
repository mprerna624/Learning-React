import React from 'react';
import appwriteService from '../appwrite/configService';
import { Link } from 'react-router-dom';

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full h-full bg-gray-100 rounded-xl p-4 flex flex-col">
            <div className="w-full mb-4 flex-grow">
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-full' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard