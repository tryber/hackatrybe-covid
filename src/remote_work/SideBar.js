import React from 'react';

function SideBar(props) {  
  const { nav } = props;
  return (
    <div className="Side-Bar">
      <nav>
        <ul>
          {nav.map(({ link, href }) => (
            <li><a href={`#${href}`}>{link}</a></li>))
          }
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
