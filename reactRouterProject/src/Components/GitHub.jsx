import React, { useEffect, useState } from 'react';

function GitHub() {

    const [data, setData] = useState([]);

    useEffect( () => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then( response => response.json() )
        .then( data => setData(data));
    } , []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" className='text-center m-3' width={200} />
    </div>
  )
}

export default GitHub
