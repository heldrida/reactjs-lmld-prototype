'user strict';

import React from 'react';

class YellowHello extends React.Component {

	constructor(props) {
		super(props);
	}

  componentDidMount() {

    this.yellowHello = document.querySelector('.yellow-hello');
    this.yellowHelloBlock = document.querySelector('.yellow-hello .block');
    this.trigger1 = document.querySelector('.trigger1');

    // initialise the scroll magic
    // todo: move this to ES6 module `import`
    // currently injected on the html index file
    this.createScrollMagicScenes();

  }

  componentWillUnmount() {
    // Destroy scroll magic scene instances
    this.props.removeSceneFromScrollMagicController('yellowHello');
  }

  createScrollMagicScenes() {

    // Logo switcher timeline
    let tl = new window.TimelineLite({
      onStart: null,
      onComplete: null,
      onReverseComplete: null
    });

    if ((window.innerWidth < 600)) {
      tl.to(this.yellowHelloBlock, 0.6, { width: '80%', y: -60 });
    } else {
      tl.to(this.yellowHelloBlock, 0.6, { width: '60%', y: -60 });
    }
    tl.to(this.yellowHelloBlock, 0.6, { opacity: 0, y: 20 });
    tl.set(this.yellowHello, { zIndex: -100 });

    // declare timeline to controller
    let sc1 = new window.ScrollMagic.Scene({
        triggerElement: this.trigger1,
        triggerHook: 'onLeave',
        duration: '600px'
      })
      .setTween(tl);
      //.addIndicators({name: "tl 1"});

    setTimeout(() => {
      this.props.addToScrollMagicController({ yellowHello: [sc1] });
    }, 0);

  }

	render() {
		return (
			<div className={'yellow-hello'}>
        <div className='block'></div>
      </div>
		);
	}

}

export default YellowHello;