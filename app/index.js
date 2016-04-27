require('../src/sass/app.scss');

//var React = require("react");
//var ReactDOM = require("react-dom");
//var routes = require('./config/routes');
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';

ReactDOM.render(
	routes,
	document.getElementById('app')
);