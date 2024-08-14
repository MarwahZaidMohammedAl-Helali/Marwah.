// src/components/sections/BlogSection.js

import React from 'react';
import styled from 'styled-components';
import BlogCard from '../common/BlogCard'; // Reusable BlogCard component

const BlogSectionContainer = styled.section`
  padding: 4rem 2rem;
`;

const BlogTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const blogPosts = [
  { id: 1, title: 'Blog Post One', excerpt: 'Excerpt of the first blog post.' },
  { id: 2, title: 'Blog Post Two', excerpt: 'Excerpt of the second blog post.' }
];

const BlogSection = () => {
  return (
    <BlogSectionContainer>
      <BlogTitle>Recent Blog Posts</BlogTitle>
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </BlogSectionContainer>
  );
};

export default BlogSection;
