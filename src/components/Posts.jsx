/* eslint-disable react/prop-types */

const BlogPost = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="/public/images/image.jpg"
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.desc}</p>
        <ul className="mt-3">
          {post.category.map((category, index) => (
            <li key={index} className="text-indigo-600">
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
