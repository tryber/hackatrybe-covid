import React from 'react';
import SideBar from './SideBar';
import BlogContent from './BlogContent';
import data from './contents.js';

function BlogPage(props) {
  const { id } = props.match.params;
  const blog = data.find(({ title }) => id === title)
  const { title, content, nav} = blog;
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <div>
          <SideBar nav={nav}/>
          <BlogContent content={content}/>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
