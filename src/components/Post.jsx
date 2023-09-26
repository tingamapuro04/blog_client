import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const navigate = useNavigate();
  const { post_id } = useParams();
  let posts = useSelector((state) => state.posts.data.data);
  const selected_post = posts.filter((item) => item._id === post_id)[0];
  
  const handleUpdate = () => {
    navigate(`/posts/update_post/${post_id}`);
  }

  

  return (
    <div className="py-4 px-2 antialiased flex flex-col  items-stretch h-screen w-full">
      <div className="bg-white self-center flex flex-col shadow-lg w-5/6 rounded-lg p-3">
        <img
          src="/public/images/image.jpg"
          alt={selected_post.title}
          className="w-4/6 h-48 object-cover self-center rounded-1xl"
        />
        <div className="p-4 flex flex-col">
          <h2 className="text-xl self-center font-semibold text-gray-800">
            {selected_post.title}
          </h2>
          <p className="text-gray-600 self-center w-5/6 self-ceter mt-2 font-sans">
            {selected_post.desc}
          </p>
          {selected_post.category && (
            <ul className="mt-3 self-center flex ">
              {selected_post.category.map((category, index) => (
                <li
                  key={index}
                  className="bg-blue-400 hover:bg-blue-700 text-white px-2 py-1 mr-2 rounded-full"
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
          <button
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg self-center"
            onClick={handleUpdate}
          >
            Update Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
