import React from 'react';
import {useLoaderData} from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // Instead of the following logic, we can use a little more optimized appraoch - loader attribute in <Route /> and useLoaderData fn as it will load the data even before useEffect when we hover over the Github link so faster results

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Github profile picture" width={200} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}