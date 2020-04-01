import React from 'react';
import SideBar from './SideBar';
import BlogContent from './BlogContent';
import data from './contents.js';
import './BlogPage.css';

function BlogPage(props) {
  const { id } = props.match.params;
  const blog = data.find(({ title }) => id === title)
  const { title, content, nav } = blog;
  return (
    <div className="Blog-Page">
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className="content-blog">
        <SideBar nav={nav} />
        <BlogContent content={content} />
      </div>
    </div>
  );
}

export default BlogPage;
