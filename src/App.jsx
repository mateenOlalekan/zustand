// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Topbar from "./Components/Topbar";
// import HeroSlider from "./Components/HeroSlider";

// function App() {
//   return (
//     <>
//       <Topbar/>
//       <HeroSlider/>
//     </>
//   )
// }

// export default App
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data.slice(0, 5));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async () => {
    const newPost = { title, body, userId: 1 };
    const response = await axios.post(API_URL, newPost);
    setPosts([response.data, ...posts]);
    setTitle("");
    setBody("");
  };

  const updatePost = async () => {
    const updatedPost = { title, body, userId: 1 };
    const response = await axios.put(`${API_URL}/${editId}`, updatedPost);
    setPosts(posts.map((post) => (post.id === editId ? response.data : post)));
    setEditId(null);
    setTitle("");
    setBody("");
  };

  const deletePost = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">React CRUD App</h1>

        {/* Form Section */}
        <div className="mb-6">
          <input
            className="w-full p-3 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full p-3 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {editId ? (
            <button
              className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition"
              onClick={updatePost}
            >
              Update Post
            </button>
          ) : (
            <button
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
              onClick={createPost}
            >
              Add Post
            </button>
          )}
        </div>

        {/* Post List */}
        <ul className="space-y-4 grid grid-cols-4 gap-2">
          {posts.map((post) => (
            <li key={post.id} className=" flex-col bg-gray-50 p-4 rounded-md shadow flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.body}</p>
              </div>
              <div className="space-x-1 w-full flex justify-between items-center gap-2">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                  onClick={() => {
                    setTitle(post.title);
                    setBody(post.body);
                    setEditId(post.id);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
