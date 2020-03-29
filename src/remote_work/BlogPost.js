import React from 'react';
import ReactMarkdown from 'react-markdown';

function BlogPost(props) {
  const { content } = props

  return (
    <article className="App">
      <ReactMarkdown
        source={content}
        escapeHtml={false}
      />
    </article>
  );
}

export default BlogPost;
