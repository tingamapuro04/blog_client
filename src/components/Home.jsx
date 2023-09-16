import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts';

function Home() {
  const [posts, setPosts ] = useState([]);
  console.log(localStorage.getItem('user'));
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/posts");
      setPosts(res.data.data);
      console.log(res.data.data);
    }
    getPosts();
  }, []);

  return (
    <div>
      <Posts posts={posts} />
    </div>
  )
}

export default Home
