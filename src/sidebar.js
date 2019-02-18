import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import ColorInputForm from './ColorInputForm.js'
import { renderComponent } from 'recompose';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Categories">
        Categories
      </a>

      <a className="menu-item" href="/mycolors">
        My Liked Colors
      </a>

      <a className="menu-item" href="/me">
        My Profile
      </a>

      <a className="menu-item" onClick={props.showform}>
        Toggle New Color Form
      </a>

    </Menu>
  );
};