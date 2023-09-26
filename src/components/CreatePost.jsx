import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const navigate = useNavigate();
  // Define state to hold the input values
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    category: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API with the form data
      const response = await axios.post(
        "http://localhost:3000/api/v1/posts",
        {
          title: formData.title,
          desc: formData.desc,
          category: formData.category
            .split(",")
            .map((cat) => cat.trim()),
        }
      );

      // Handle the response, e.g., show a success message
      console.log("Post created:", response.data);

      // Clear the form inputs
      setFormData({
        title: "",
        desc: "",
        category: "",
      });
      navigate('/')
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Description:
          </label>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categories" className="block text-gray-600">
            Categories (comma-separated):
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
