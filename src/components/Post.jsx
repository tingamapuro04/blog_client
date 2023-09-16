import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState([]);
  const [updateData, setUpdateData] = useState({
    title: "",
    categories: "",
  });

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/posts/${post_id}`
        );
        setPost(res.data.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    getPost();
  }, [post_id]);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/posts/${post_id}`,
        updateData
      );
      setUpdateData({
        title: "",
        description:"",
        categories:""
      })
      // Handle successful update, e.g., navigate to another page or show a success message.
    } catch (error) {
      console.error("Error updating post:", error);
      // Handle update error, e.g., show an error message to the user.
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/public/images/image.jpg"
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-600 mt-2">{post.desc}</p>
          {post.category && (
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
          )}
          <button
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
            onClick={handleUpdate}
          >
            Update Post
          </button>
        </div>
      </div>

      {/* Update form */}
      <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Update Post</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="updateTitle" className="block text-gray-600">
              Title:
            </label>
            <input
              type="text"
              id="updateTitle"
              name="title"
              value={updateData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="updateDescription" className="block text-gray-600">
              Description:
            </label>
            <textarea
              id="updateDescription"
              name="description"
              value={updateData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="updateCategories" className="block text-gray-600">
              Categories (comma-separated):
            </label>
            <input
              type="text"
              id="updateCategories"
              name="categories"
              value={updateData.categories}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            onClick={handleUpdate}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
