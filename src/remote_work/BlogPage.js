import React from 'react';
import SideBar from './SideBar';
import BlogContent from './BlogContent';
import data from './contents.js';

function BlogPage(props) {
  const { id } = props.match.params;
  console.log(id)
  const blog = data.find(({ title }) => id === title)
  console.log(blog)
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

BlogPage.defaultProps = {  
    title:'Zoom',
    type: 'Ferramenta',
    briefing: `  This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
    `,
    content: 'textoProdutivade',
    nav:[{link: 'Baixar o zoom', href:'baixar-zoom'},{link: 'Atualizar', href:'atualiza'}],
  }

export default BlogPage;
