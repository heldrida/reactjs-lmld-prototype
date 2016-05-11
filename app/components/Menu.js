'user strict';

import React from 'react';

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.triangle1 = document.querySelector('.menu .triangle1');
    this.triangle2 = document.querySelector('.menu .triangle2');
    
    window.addEventListener('resize', _.throttle(this.onResizeHandler.bind(this), 100));

    // call at least once
    this.diagonal();
  }

  onResizeHandler() {
    this.diagonal();
  }

  // Add a line vertically - Found an example here: http://jsfiddle.net/Mottie/B95wX/3/
  diagonal() {
    let x = window.innerWidth + 'px';
    let y = window.innerHeight + 'px';
    let value = y + ' ' + x;

    this.triangle1.style.borderWidth = value;
    this.triangle2.style.borderWidth = value;
  }

  render() {
    return (
      <div className={'container'}>
        <nav>
          <a href='#/projects' onClick={this.props.menuClick}>Work</a>
          <a href='#'>About Us</a>
          <a href='#'>Join the team</a>
        </nav>
        <div className={'triangle1'}></div>
        <div className={'triangle2'}></div>
      </div>
    );
  }

}

export default Menu;