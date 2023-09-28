/* eslint-disable react/prop-types */
import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../redux/postsFetch";

const BlogPost = ({ post }) => {
  return (
    <Link to={`/posts/${post._id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={post.photo}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
          <p className="text-gray-600 mt-2">{post.desc}</p>
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
        </div>
      </div>
    </Link>
  );
}
const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data.data)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts && posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  );
};


export default Posts;
