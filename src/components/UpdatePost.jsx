import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePost = () => {
  const { post_id } = useParams();
  let posts = useSelector((state) => state.posts.data.data);
  const selected_post = posts.filter((item) => item._id === post_id)[0];
  const [post, setPost] = useState([]);
  const [updateData, setUpdateData] = useState({
    title: selected_post.title,
    categories: selected_post.category,
  });

  // useEffect(() => {
  //   const getPost = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:3000/api/v1/posts/${post_id}`
  //       );
  //       setPost(res.data.data);
  //     } catch (error) {
  //       console.error("Error fetching post:", error);
  //     }
  //   };
  //   getPost();
  // }, [post_id]);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/posts/${post_id}`,
        updateData
      );
      setUpdateData({
        title: "",
        description: "",
        categories: "",
      });
    } catch (error) {
      console.error("Error updating post:", error);
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
  );
}

export default UpdatePost
