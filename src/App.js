import React from 'react';
import SideBar from './remote_work/SideBar';
import BlogPost from './remote_work/BlogPost';
import content from './content';
import './App.css';

function App(props) {
  const { id } = props.match.params;
  const content = content.filter(({ title }) => id === title)
  const { title, content, links} = props;
  return (
    <div className="content">
      <div className="">
        <h1>{title}</h1>
      </div>
      <div>
        <div>         
          <SideBar links={nav}/>
          <BlogPost content={content}/>
        </div>
      </div>
    </div>
  );
}

App.defaultProps = {  
    title:'Zoom',
    type: 'Ferramenta',
    briefing: `  This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
    `,
    content: 'textoProdutivade',
    nav:[{link: 'Baixar o zoom', href:'baixar-zoom'},{link: 'Atualizar', href:'atualiza'}],
  }

export default App;
