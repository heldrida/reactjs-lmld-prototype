'use strict';

import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import Main from '../components/Main';
import Home from '../components/Home';
import Projects from '../components/Projects';

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
	<Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='/projects' component={Projects}>
				<Route path=":name" component={Projects} />
			</Route>
		</Route>
	</Router>
);

export default routes;