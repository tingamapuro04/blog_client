/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Post = ({match}) => {
  const { post_id } = useParams();
  const [post, setPost] = useState([])
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:3000/api/v1/posts/${post_id}`);
      setPost(res.data.data);
    }
    getPost();
  }, [])
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/public/images/image.jpg"
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {post.title}
          </h2>
          <p className="text-gray-600 mt-2">{post.desc}</p>
          {post.category &&
            <ul className="mt-3 flex">
            {post.category.map((category, index) => (
              <li
                key={index}
                className="bg-blue-400 hover:bg-blue-700 text-white px-3 py-1 mr-2 rounded-full"
              >
                {category}
              </li>
            ))}
          </ul> 
        }
        </div>
      </div>
    </div>
  );
}

export default Post
