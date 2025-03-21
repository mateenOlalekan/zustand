import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function fetch() {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [editId, setEditId] = useState(null)

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    const fetchPosts = async () => {
        try {
            const response = await axios.get(API_URL);
            setPosts(response.data.slice(0, 5));
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    handleCreatePost = async () => {
        const newPost = { title, body, userId: 1 };
        const response = await axios.post(API_URL, newPost);
        setPosts([response.data, ...posts]);
        setTitle("");
        setBody("");
    }
    handleUpdatePost = async () => {
        const updatedPost = { title, body, userId: 1 };
        const response = await axios.put(`${API_URL}/${editId}`, updatedPost);
        setPosts(posts.map((post) => (post.id === editId ? response.data : post)));
        setEditId(null);
        setTitle("");
        setBody("");
    }
    handleDeletePost = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        setPosts(posts.filter((post) => post.id !== id));
    }
    handleEditPost = (post) => {
        setTitle(post.title);
        setBody(post.body);
        setEditId(post.id);
    }

  return (
    <>
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={() => handleEditPost(post)}>Edit</button>
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default fetch