// src/pages/BlogPost.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogService from '../services/api'; // Example service for fetching blog post data

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await blogService.getBlogPost(id);
        setPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Add more details or formatting as needed */}
    </div>
  );
};

export default BlogPost;
