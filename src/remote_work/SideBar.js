import React from 'react';
import './SideBar.css';
import MediaQuery from 'react-responsive';

function SideBar(props) {
  const { nav } = props;
  return (
    <>
      <MediaQuery maxDeviceWidth={641}>
        <div></div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={641}>
        <nav className="Side-Bar">
          <ul>
            {nav.map(({ link, href }) => (
              <li className="Side-Bar-list">
                <a href={`#${href}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </MediaQuery>
    </>
  );
}

export default SideBar;
