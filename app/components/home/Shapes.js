'use strict';

import React from 'react';
import '../../../src/js/gsap/plugins/DrawSVGPlugin.min.js';

class HomeShapes extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.shape1 = document.querySelector('.shape1');
    this.shape2 = document.querySelector('.shape2');
    this.shape1part1 = document.querySelector('.shape1-1');
    this.shape1part2 = document.querySelector('.shape1-2');
    this.shape1part3 = document.querySelector('.shape1-3');
    this.shape1part4 = document.querySelector('.shape1-4');
    this.shape1part5 = document.querySelector('.shape1-5');
    this.shape1part6 = document.querySelector('.shape1-6');
    this.shape2part1 = document.querySelector('.shape2-1');
    this.shape2part2 = document.querySelector('.shape2-2');
    this.shape2part3 = document.querySelector('.shape2-3');
    this.shape2part4 = document.querySelector('.shape2-4');
    this.shape2part5 = document.querySelector('.shape2-5');
    this.shape2part6 = document.querySelector('.shape2-6');

    // Launch Animation
    this.shapeAnimation();
  }

  shapeAnimation() {
    let tl = new window.TimelineMax({
      repeat: -1,
      paused: false,
      repeatDelay: 0,
      immediateRender: false,
      delay: 1
    });

    // Set Shape 1
    tl.set([this.shape1part4, this.shape1part6], { drawSVG: '0% 0%'});
    tl.set([this.shape1part1, this.shape1part2, this.shape1part3], { y: -30 });
    tl.set(this.shape1part5, { attr: { r: 0 } });
    if ((window.innerWidth < 600)) {
      tl.set(this.shape1part5, { attr: { cx: 320 } });
    }

    // Set Shape 2
    tl.set(this.shape2part1, { y: -100 });
    tl.set(this.shape2part2, { y: -100 });
    tl.set(this.shape2part3, { x: -50 });
    tl.set(this.shape2part4, { x: -50 });
    tl.set([this.shape2part5], { drawSVG: '0% 0%'});
    tl.set(this.shape2part6, { attr: { r: 0 } });

    // Animation All Shapes
    tl.to(this.shape1part1, 0.8, { opacity: 1, y: 0, ease: Elastic.easeOut.config(1, 0.3) });
    tl.to(this.shape1part2, 0.8, { opacity: 1, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.6');
    tl.to(this.shape1part3, 0.8, { opacity: 1, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.6');
    if ((window.innerWidth < 600)) {
      tl.to(this.shape1part6, 1.6, { drawSVG: '0% 100%', ease: Bounce.easeOut }, '-=1');
    } else {
      tl.to(this.shape1part4, 1.6, { drawSVG: '100% 0%', ease: Bounce.easeOut }, '-=1');
    }
    tl.to(this.shape1part5, 0.8, { attr: { r: 20 }, opacity: 1, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.6');
    tl.to(this.shape1, 0.2, { opacity: 0 }, '+=2');
    tl.to(this.shape2part1, 0.8, { opacity: 1, y: 0, ease: Elastic.easeOut.config(1, 0.3) });
    if ((window.innerWidth > 600)) {
      tl.to(this.shape2part2, 0.8, { opacity: 1, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.6');
    }
    tl.to(this.shape2part3, 0.8, { opacity: 1, x: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.4');
    tl.to(this.shape2part4, 0.8, { opacity: 1, x: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.6');
    tl.to(this.shape2part5, 1, { drawSVG: '100% 0%', ease: Bounce.easeOut }, '-=1');
    tl.to(this.shape2part6, 0.8, { opacity: 1, attr: { r: 38 }, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.6');
    tl.to(this.shape2, 0.2, { opacity: 0 }, '+=2');

  }

  render() {
    return (
      <div className="home-shapes">
        <div className='shape1'>
          <svg width="517px" height="393px" viewBox="0 0 517 393">
            <line className="shape1-6" x1="180" y1="166" x2="400" y2="166" stroke="#1F1F1F" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            <circle className="shape shape1-5" cx="360" cy="166" r="19" fill="#1F1F1F"></circle>
            <line className="shape1-4" x1="266" y1="160" x2="266" y2="340" stroke="#1F1F1F" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            <path className="shape shape1-3" d="M219,132 C219,120.40202 209.59798,111 198,111 C186.40202,111 177,120.40202 177,132 C177,133.104569 177.895431,134 179,134 C180.104569,134 181,133.104569 181,132 C181,122.611159 188.611159,115 198,115 C207.388841,115 215,122.611159 215,132 C215,133.104569 215.895431,134 217,134 C218.104569,134 219,133.104569 219,132 L219,132 Z" fill="#1F1F1F"></path>
            <path className="shape shape1-2" d="M219,102 C219,90.4020203 209.59798,81 198,81 C186.40202,81 177,90.4020203 177,102 C177,103.104569 177.895431,104 179,104 C180.104569,104 181,103.104569 181,102 C181,92.6111593 188.611159,85 198,85 C207.388841,85 215,92.6111593 215,102 C215,103.104569 215.895431,104 217,104 C218.104569,104 219,103.104569 219,102 L219,102 Z" fill="#1F1F1F"></path>
            <path className="shape shape1-1" d="M219,72 C219,60.4020203 209.59798,51 198,51 C186.40202,51 177,60.4020203 177,72 C177,73.1045695 177.895431,74 179,74 C180.104569,74 181,73.1045695 181,72 C181,62.6111593 188.611159,55 198,55 C207.388841,55 215,62.6111593 215,72 C215,73.1045695 215.895431,74 217,74 C218.104569,74 219,73.1045695 219,72 L219,72 Z" fill="#1F1F1F"></path>
          </svg>
        </div>
        <div className='shape2'>
          <svg width="517px" height="393px" viewBox="0 0 517 393">
            <circle className="shape shape2-6" cx="380" cy="120" r="38" fill="#FFD000"></circle>
            <circle className="shape2-5" cx="350" cy="110" r="38" fill='none' stroke="#000" strokeWidth='10'></circle>
            <polygon className="shape shape2-4" fill="#000000" points="349 250.188382 345.883553 253 233.626609 136.983162 236.743056 134.171544"></polygon>
            <polygon className="shape shape2-3" fill="#000000" points="255.63158 202.181118 367.888524 318.197956 357.772077 328.009574 245.515133 211.992735"></polygon>
            <polygon className="shape shape2-2" fill="#000000" points="272.398077 300.417169 276.805282 313.810934 218.630176 332.998993 214.222971 319.605228"></polygon>
            <path className="shape shape2-1" d="M140.216569,113.515913 L147.229861,125.745178 C114.266383,144.693487 102.847898,186.957987 121.77473,219.960884 C140.701563,252.961766 182.920171,264.395222 215.881637,245.444899 L222.896942,257.676178 C203.666234,268.732884 181.284072,271.628016 159.877935,265.829693 C138.469786,260.031369 120.599476,246.234663 109.557314,226.982134 C86.7646186,187.236016 100.517513,136.336487 140.216569,113.515913" fill="#000000"></path>
          </svg>
        </div>
      </div>
    );
  }

}

export default HomeShapes;