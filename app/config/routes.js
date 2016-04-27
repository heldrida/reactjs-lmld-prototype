import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import Main from '../components/Main';
import Home from '../components/Home';
import Test from '../components/Test';

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

var routes = (
	<Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='test' component={Test} />
		</Route>
	</Router>
);

export default routes;