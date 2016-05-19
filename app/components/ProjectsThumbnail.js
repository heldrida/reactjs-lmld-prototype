'use strict';

import React from 'react';
import _ from 'lodash';
import Thumbnail from '../components/Thumbnail';

class ProjectsThumbnail extends Thumbnail {

	constructor(props) {

		super(props);
		this.defaultLocationHashName = 'projects';

	}

	initTimeline() {

		let timeline;

		// Initialise the timeline if not declared yet to cache it
		if (!this.timeline) {

			let c = document.querySelector('.content .wrapper');
			let offset = window.getComputedStyle(c, null).getPropertyValue('margin-left');
			offset = parseInt(offset, 0);

			// Calculate DOM position
			this.pos = this.calcElementPosition(this.els.block);
			this.headerBg = document.querySelector('header');
			this.headerLogo = document.querySelector('header .logo-container');

			// Add to the calculation the projects container (for projects)
			const cumulativeOffset = function(element) {
			    var top = 0, left = 0;
			    do {
			        top += element.offsetTop  || 0;
			        left += element.offsetLeft || 0;
			        element = element.offsetParent;
			    } while(element);

			    return {
			        top: top,
			        left: left
			    };
			};
			//let pc = document.querySelector('.projects-content');
			//let pcOffset = pc ? window.getComputedStyle(pc, null).getPropertyValue('margin-top') : 0;
			let pcOffset = cumulativeOffset(this.els['block']);

			// Open the Modal
			let cssBefore = {
								css: {
										width: this.pos.width,
										height: this.pos.height,
										position: 'fixed',
										top: pcOffset.top - window.scrollY,
										left: pcOffset.left
									}
							};

			let cssAfter = {
								css: {
										width: window.innerWidth,
										height: window.innerHeight,
										top: 0,
										position: 'fixed',
										left: 0
									}
							};

			const onStartCallback = () => {
				this.props.setNoScroll(true);
			};

			const onCompleteCallback = () => {

				this.props.setNoScroll(false);

				this.setState({
					open: true
				});

				// refactor to treat only modal elements
				this.updateHash();

				// show header elements
				this.headerBg.classList.add('bg');
				this.headerLogo.style.opacity = 1;

			};
			const onReverseCompleteCallback = () => {
				// todo: check state when routing from non home to home
				if (this.els.block) {
					this.els.block.parentNode.style.zIndex = '';
					this.props.setNoScroll(false);
					this.setState({
						open: false
					});
				}
			};
			timeline = new window.TimelineLite({
				onStart: onStartCallback,
				onComplete: onCompleteCallback,
				onReverseComplete: onReverseCompleteCallback
			});

			timeline.to(this.els.titleContainer, 0.3, { css: { opacity: 0 } });
			timeline.fromTo(this.els.block, 0.2, cssBefore, cssAfter);
			timeline.pause();

		}

		return timeline;

	}

	render() {

		return (
			<div className={'thumbnail' + ' ' + this.props.className + ' ' + (this.state.open ? 'open' : '')}>
				<div className='block' ref={this.setElement.bind(this, 'block')} onClick={this.openBlockThrottle.bind(this)}>
						<div className='content' style={this.posterStyle}>
						</div>
						<div className={'title-container'} ref={this.setElement.bind(this, 'titleContainer')}>
							<h4 ref={this.setElement.bind(this, 'title')}>{this.props.title}</h4>
							<span className='separator'> - </span>
							<p ref={this.setElement.bind(this, 'description')} dangerouslySetInnerHTML={{__html:this.props.description}}></p>
						</div>
				</div>
			</div>
		);

	}

}

export default ProjectsThumbnail;