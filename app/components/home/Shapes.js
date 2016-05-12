'use strict';

import React from 'react';

class HomeShapes extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // initialise the scroll magic
    // todo: move this to ES6 module `import`
    // currently injected on the html index file
    this.createScrollMagicScenes();

  }

  componentWillUnmount() {
    //this.TweenMax.set(this.shape, { position: 'absolute', top: '50%', left: '50%', xPercent: -50, yPercent: -50 });
    //this.TweenMax.set(this.container, { position: 'absolute', top: '50%', left: '50%', xPercent: -50, yPercent: -50 });
    //this.TweenMax.set(this.drop, { transformOrigin: '50% 50%' });

    // Destroy scroll magic scene instances
    this.props.removeSceneFromScrollMagicController('homeShapes');
  }

  createScrollMagicScenes() {

    let tl = new window.TimelineMax({
      repeat: -1,
      paused: false,
      repeatDelay: 0,
      immediateRender: false
    });

    tl.timeScale(3);

    tl.set([jump, jumpRef], {
      drawSVG: '0% 0%'
    })
    .set([circleL, circleR], {
      attr: {
        rx: 0,
        ry: 0,
      }
    })

    setTimeout(() => {
      this.props.addToScrollMagicController({ homeShapes: [tl] });
    }, 0);
  }

  render() {
    return (
      <div className="home-shapes">
        <div className='shape1'>
          <svg className='shape1-1' width="34px" height="19px" viewBox="0 0 34 19">
            <path d="M32,17 C32,8.71572875 25.2842712,2 17,2 C8.71572875,2 2,8.71572875 2,17" fill="none" stroke="#1F1F1F" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"></path>
          </svg>
          <svg className='shape1-2' width="34px" height="19px" viewBox="0 0 34 19">
            <path d="M32,17 C32,8.71572875 25.2842712,2 17,2 C8.71572875,2 2,8.71572875 2,17" fill="none" stroke="#1F1F1F" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"></path>
          </svg>
          <svg className='shape1-3' width="34px" height="19px" viewBox="0 0 34 19">
            <path d="M32,17 C32,8.71572875 25.2842712,2 17,2 C8.71572875,2 2,8.71572875 2,17" fill="none" stroke="#1F1F1F" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"></path>
          </svg>
          <svg className='shape1-4' height="180" width="2">
            <line x1="0" y1="0" x2="0" y2="180" stroke="#1F1F1F" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          <svg className='shape1-5' width="38px" height="38px" viewBox="0 0 38 38">
            <circle cx="19" cy="19" r="19"></circle>
          </svg>
        </div>
      </div>
    );

  }

}

export default HomeShapes;