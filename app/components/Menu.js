'user strict';

import React from 'react';

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'menu'}>
        <div className={'container'}>
          <nav>
            <a href='#'>Work</a>
            <a href='#'>About Us</a>
            <a href='#'>Join the team</a>
          </nav>
        </div>
      </div>
    );
  }

}

export default Menu;