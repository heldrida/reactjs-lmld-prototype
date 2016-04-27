
	LMLD Reactjs Prototype
	======================

	A Reactjs (w/ webpack, webpack-dev-server, gulp, sass, babel, es2015) prototype for what will be the new Lmld website.

		- Build system:

			0) Initialised NPM package;
			1) Installed React and React DOM;
			2) Babel (The core, webpack loader and the react preset);
			3) Wrote the Webpack config file, that runs the entry js file through the defined loaders (babel and it's presets), outputs to the distribution path and finally runs the plugin `html webpack`, where it's `configuration parameters` injects the output into the body.
			4) Included BrowswerSync (using BS, so at the moment this doc was written there's no HMR Hot Module Reload support);
			5) Substituted the BrowserSync Build from webpack dev server;
			6) Created npm task scripts to run the webpack dev server and the webpack production builder;
			7) Moved the npm task scripts into Gulp instead
			8) Applied an html injector, as a task on Gulp


			Note: No actual physical files are written to the fs during the dev build. For performance, all files exist in memory when served from the webpack server. Physical files are only written when you run the build task, see the gulpfile.

			#References:

				The following starter kit follows good conventions:
				> https://github.com/coryhouse/react-slingshot

				> https://reactjsnews.com/bring-your-animations-to-life-with-physics

				> https://reactjsnews.com/an-angular-developers-first-react-app

				> https://github.com/kriasoft/react-starter-kit

				> https://github.com/wesbos/React-For-Beginners-Starter-Files

				> http://survivejs.com/webpack_react/developing_with_webpack/

				> http://eng.localytics.com/faster-sass-builds-with-webpack/

				> https://www.bensmithett.com/smarter-css-builds-with-webpack/

				> http://julienrenaux.fr/2015/03/30/introduction-to-webpack-with-practical-examples/

				> http://survivejs.com/webpack/developing-with-webpack/refreshing-css/

				> https://github.com/petehunt/react-howto

				> https://webpack.github.io/docs/stylesheets.html#separate-css-bundle

				> http://ihaveabackup.net/2015/08/17/sass-with-sourcemaps-webpack-and-live-reload/

				> http://jarstingstall.github.io/getting-started-with-webpack-part-4/

				> https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js

				> https://toddmotto.com/react-create-class-versus-component/

				> http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/

				> http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/

				> http://www.hackingwithreact.com/read/1/21/introducing-react-router

				> http://andrewhfarmer.com/starter-project/




		- Sass structure:

			Followed a few standards to separate the different stylesheets, in the context of react components or containers.

			#References:

				> https://www.netguru.co/blog/8-rules-improve-css

				> http://thesassway.com/beginner/how-to-structure-a-sass-project

				> https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization




		- Assets:

			The asset files are stored in the app directory, the build system should copy, process it and save on the build directory.


