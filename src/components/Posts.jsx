/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogPost = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="/public/images/image.jpg"
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Link to={`/posts/${post._id}`}>
        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
        </Link>
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
  );
}
const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  );
};


export default Posts;
