'use strict';

import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import Main from '../components/Main';
import Home from '../components/Home';
import Projects from '../components/Projects';
import AboutUs from '../components/AboutUs';
import Jobs from '../components/Jobs';

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
	<Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='/projects' component={Projects}>
				<Route path=":name" component={Projects} />
			</Route>
      <Route path='/about-us' component={AboutUs} />
      <Route path='/jobs' component={Jobs} />
		</Route>
	</Router>
);

export default routes;