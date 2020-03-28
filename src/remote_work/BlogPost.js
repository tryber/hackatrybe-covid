import React from 'react';
import './App.css';

function App(props) {
  const ReactMarkdown = require('react-markdown/with-html')

  const markdown = `
  This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
  `
  
  return (
    <div className="App">  
    
    <ReactMarkdown
      source={markdown}
      escapeHtml={false}
    />          
     
    </div>
  );
}

export default App;