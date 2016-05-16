'use strict';

import React from 'react';

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const studio1 = require('../../src/images/studio1.jpg');
    const capability1 = require('../../src/images/about/capability1.png');
    const capability2 = require('../../src/images/about/capability2.png');
    const capability3 = require('../../src/images/about/capability3.png');
    const capability4 = require('../../src/images/about/capability4.png');

    return (
      <div className='about-us-content'>
        <div className='wrapper'>
          <div className='title title1'>
            <h2>What we do</h2>
            <p>La Moulade is a creative studio based in London dedicated to making every digital user interaction contain moments of play, fun and inspiration. We focus our work on high quality creations for brands around the world.</p>
          </div>
          <div className='desc1'>
            <div className='col col1'>
              <h3>Design & Identity</h3>
              <p>Our team of designers and developers develop new exciting interactive and responsive user experiences across a whole range of devices.</p>
              <ul>
                <li>Creative web & mobile experiences</li>
                <li>Transactional platforms</li>
                <li>Branding</li>
              </ul>
            </div>
            <div className='col col2'>
              <h3>Connected Environments</h3>
              <p>In 2016 we will be looking at new possibilities and capabilities for the studio. Our ambition is to bring tech to life in a visually stunning way. Watch this space!</p>
              <ul>
                <li>Interactive objects</li>
                <li>Retail environments</li>
                <li>Data visualisation projections</li>
              </ul>
            </div>
          </div>
          <img className='studioImg' src={studio1} />
          <div className='title title2'>
            <h2>Creative<br />capabilities</h2>
            <p>La Moulade is a creative studio based in London dedicated to making every digital user interaction contain moments of play, fun and inspiration. We focus our work on high quality creations for brands around the world.</p>
          </div>
          <div className='desc2'>
            <div className='col col1'>
              <div className='img'></div>
              <h3>Explore</h3>
              <h4>Research & Planning</h4>
              <p>Working towards a centrally driven agenda that is informed by what we have jointly discovered.</p>
            </div>
            <div className='col col2'>
              <div className='img'></div>
              <h3>Explore</h3>
              <h4>Research & Planning</h4>
              <p>Working towards a centrally driven agenda that is informed by what we have jointly discovered.</p>
            </div>
            <div className='col col3'>
              <div className='img'></div>
              <h3>Explore</h3>
              <h4>Research & Planning</h4>
              <p>Working towards a centrally driven agenda that is informed by what we have jointly discovered.</p>
            </div>
            <div className='col col4'>
              <div className='img'></div>
              <h3>Explore</h3>
              <h4>Research & Planning</h4>
              <p>Working towards a centrally driven agenda that is informed by what we have jointly discovered.</p>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default AboutUs;