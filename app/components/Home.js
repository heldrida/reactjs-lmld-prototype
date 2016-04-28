import React from 'react';
import ReactRouter from 'react-router';
import HomeBlock from '../components/HomeBlock';

class Home extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div>
				<h1>Home.js!</h1>
				<HomeBlock />
			</div>
		);

	}

}

export default Home;