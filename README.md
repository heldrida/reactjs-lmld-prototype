
	LMLD Reactjs Prototype
	======================

	A prototype, architecture and anim tests, related with the new lmld website.

	Process:

		0) Initialised NPM package;
		1) Installed React and React DOM;
		2) Babel (The core, webpack loader and the react preset);
		3) Wrote the Webpack config file, that runs the entry js file through the defined loaders (babel and it's presets), outputs to the distribution path and finally runs the plugin `html webpack`, where it's `configuration parameters` injects the output into the body.


	References:

		> https://reactjsnews.com/bring-your-animations-to-life-with-physics
		> https://reactjsnews.com/an-angular-developers-first-react-app
		> https://github.com/kriasoft/react-starter-kit
		> https://github.com/wesbos/React-For-Beginners-Starter-Files
		> http://survivejs.com/webpack_react/developing_with_webpack/