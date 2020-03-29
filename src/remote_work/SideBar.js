import React from 'react';

function SideBar(props) {
  console.log(props)
  const { links } = props
  return (
    <div class="col-sm-3">
      <nav id="toc" class="sticky-top" data-toggle="toc">
        <ul class="nav navbar-nav">
          {links.map(({ link, href }) => (
            <li><a href={`#${href}`}>{link}</a></li>))
          }
        </ul>
      </nav>
    </div>
  );
}
export default SideBar;
