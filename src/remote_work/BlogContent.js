import React from 'react';
import ReactMarkdown from 'react-markdown';
import './BlogContent.css';

function BlogPost(props) {
  const { content } = props

  return (
    <article className="Blog-Post">
      <ReactMarkdown
        source={content}
        escapeHtml={false}
      />
    </article>
  );
}

export default BlogPost;
