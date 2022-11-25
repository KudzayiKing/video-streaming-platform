import { use } from 'react';

const getPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

const Banner = () => {
    let posts = use(getPosts());
    return(
        <div>
            <p className='text-white'>Banner</p>
            <ul>
            {posts.map(post=>(<li key={post.id} className='text-white'>{post.title}</li>))}
            </ul>
        </div>
    )
}

export default Banner;