// src/components/common/BlogCard.js

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './BlogCard.css'; // Optional: for styling

const BlogCard = ({ title, excerpt, slug }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <Link to={`/blog/${slug}`}>Read More</Link>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default BlogCard;
