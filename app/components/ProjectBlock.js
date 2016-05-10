'use strict';

import React from 'react';
import _ from 'lodash';
import HomeBlock from '../components/home/ProjectsHome';

class ProjectBlock extends HomeBlock {

	constructor(props) {

		super(props);
		this.defaultLocationHashName = 'projects';

	}

	render() {

		return (
			<div className={ 'home-block' + ' ' + this.props.innerComponent.className + ' ' + (this.props.align === 'left' ? 'left' : 'right') }>
				<div className='block' ref={this.setElement.bind(this, 'block')} onClick={this.openBlockThrottle.bind(this)}>
						<div className={'title-container'} ref={this.setElement.bind(this, 'titleContainer')}>
							<h4 ref={this.setElement.bind(this, 'title')}>{this.props.title}</h4>
							<p ref={this.setElement.bind(this, 'description')} dangerouslySetInnerHTML={{__html:this.props.description}}></p>
						</div>
						<div className='content' style={this.posterStyle}>
							{this.state.mountContent ? <this.props.innerComponent.component showBackBtn={true} /> : null}
						</div>
				</div>
			</div>
		);

	}

}

export default ProjectBlock;