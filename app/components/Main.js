import React from 'react';

class Main extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div className='main-container'>
				Hello from Main!
				{this.props.children}
			</div>
		);

	}

}

export default Main;