'use strict';

import React from 'react';
import _ from 'lodash';
import Thumbnail from '../components/Thumbnail';

class ProjectsThumbnail extends Thumbnail {

	constructor(props) {

		super(props);
		this.defaultLocationHashName = 'projects';

	}

	render() {

		return (
			<div className={'thumbnail' + ' ' + this.props.innerComponent.className + ' ' + (this.state.open ? 'open' : '')}>
				<div className='block' ref={this.setElement.bind(this, 'block')} onClick={this.openBlockThrottle.bind(this)}>
						<div className='content' style={this.posterStyle}>
							{this.state.mountContent ? <this.props.innerComponent.component showBackBtn={true} /> : null}
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