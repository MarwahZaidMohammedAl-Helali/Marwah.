// src/pages/Blog.js

import React from 'react';
import BlogCard from '../components/common/BlogCard'; // Reusable component for blog cards

const Blog = () => {
  const articles = [
    // Example article data
    { id: 1, title: 'First Blog Post', excerpt: 'This is a summary of the first blog post.', date: '2024-01-01' },
    { id: 2, title: 'Second Blog Post', excerpt: 'This is a summary of the second blog post.', date: '2024-02-01' }
  ];

  return (
    <div>
      <h1>Blog</h1>
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Blog;
