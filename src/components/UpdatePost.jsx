import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdatePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let posts = useSelector((state) => state.posts.data.data);
  const selected_post = posts.filter((item) => item._id === id)[0];
  const [updateData, setUpdateData] = useState({
    title: selected_post.title,
    description: selected_post.desc,
    categories: selected_post.category,
  });


  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/posts/${id}`,
        updateData
      );
      setUpdateData({
        title: "",
        description: "",
        categories: "",
      });
      navigate('/posts');
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
    <div className="mt-6 p-6 shadow-lg rounded-lg min-h-screen">
      <h3 className="text-lg font-semibold mb-2">Update Post</h3>
      <form className='border-3 px-3'>
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
            className="w-full px-4 py-2 border border-cyan-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
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
            rows={10}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-cyan-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
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
            className="w-full px-4 py-2 border border-cyan-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
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
