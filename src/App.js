import React from 'react';
import ReactMarkdown from react-markdown'
import './App.css';
function App(props) {
  const { content } = props

  return (
    <div className="App">
      {/* <Header/> / */}
  <h1>{}</h1>
      <ReactMarkdown
        source={content}
        escapeHtml={false}
      />

    </div>
  );
}

App.defaultProps = {
  content: `  This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
  `,
  title: `Como fazer uma página de conteúdo`
}

export default App;
