import React, { Fragment } from 'react';
import "./Header.css"

const Header = () => {
  return ( 
    <Fragment>
      <header className="header">
        <div className="header__left">
          <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="logo-yts" />
          <h2>HD movies at the smallest file size</h2>
        </div>

        <div className="header__right">
          <input
            placeholder="Quick search"
          />
          <ul>
            <li>Home</li>
            <li className="k">4K</li>
            <li>Browse Movies</li>
          </ul>
        </div>
      </header>
    </Fragment>
   );
}
 
export default Header;