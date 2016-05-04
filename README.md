
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

				> RHL + HMR: https://github.com/gaearon/react-hot-loader/tree/master/docs#starter-kits

				> https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4#.nh1iemvcj

				> http://exploringjs.com/es6/

			#Questions:

				> About removing the Hashtag from the url requests:

					http://stackoverflow.com/questions/25086832/how-to-stop-in-browser-with-react-router

					https://github.com/reactjs/react-router/issues/2082

				> React on ES6:

					> https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html

					> https://muffinresearch.co.uk/back-to-the-future-using-es6-with-react/

				> ES6 Classes:

					> http://javascriptplayground.com/blog/2014/07/introduction-to-es6-classes-tutorial/

				> Reactjs ES6 best practicies:

					> https://blog.risingstack.com/react-js-best-practices-for-2016/

		- Sass structure:

			Followed a few standards to separate the different stylesheets, in the context of react components or containers.

			#References:

				> https://www.netguru.co/blog/8-rules-improve-css

				> http://thesassway.com/beginner/how-to-structure-a-sass-project

				> https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization




		- Assets:

			The asset files are stored in the app directory, the build system should copy, process it and save on the build directory.


		- State management:


			#References:

				> http://reactkungfu.com/2015/09/common-react-dot-js-mistakes-unneeded-state/


				> https://github.com/Yomguithereal/baobab

				> https://github.com/moreartyjs/moreartyjs


		- Animation:

			The lib React-Motion was used without success, the event onRest takes a bit too long to be triggered because of the time the physics take to settle;

			#References:

				> https://medium.com/@nashvail/a-gentle-introduction-to-react-motion-dc50dd9f2459#.q5ulf6228

				> http://michelletilley.net/2016/01/10/react-motion-staggeredmotion.html

				> http://azazdeaz.github.io/react-gsap-enhancer/#/demo/update-and-animate-transform?_k=3snpj7

				> https://github.com/hzdg/gsap-react-plugin

				> https://github.com/chenglou/react-motion

				> https://facebook.github.io/react/docs/animation.html

				> https://github.com/gilbox/react-spark-scroll

				> https://github.com/gilbox/react-track

				> http://scrollmagic.io/


		- Deployment:

			Before trying to run this command, copy the config.example.js and create a config.js with the correct credentials to the ftp server; Run the command `gulp deploy` from the command line for deployment; check for any erros in the console;


