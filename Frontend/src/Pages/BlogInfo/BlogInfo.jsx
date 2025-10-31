import React from 'react'
import './Bloginfo.css';
import BlogInfoHeader from '../../Components/BlogInfoHeader/BlogInfoHeader';
import BlogPostSection from '../../Components/BlogPostSection/BlogPostSection';
import BlogLatestNews from '../../Components/BlogLatestNews/BlogLatestNews';

const BlogInfo = () => {
  return (
    <div>
        <BlogInfoHeader/>
        <BlogPostSection/>
        <BlogLatestNews/>



    </div>
  )
}

export default BlogInfo