# Basics of React App

## [Installing react without create-react-app](https://youtu.be/mB1TKceLzh0)

- npm init -y
- npm i -D webpack webpack-cli webpack-dev-server
- npm i react react-dom
- npm i -D @babel/cli @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react @babel/runtime babel-eslint babel-loader
- create a file named: .babelrc
- create a file named: webpack.config.js
- Add start and build scripts in package.json
- Create src and public directories
- Create index.html in public directory
- Create index.js as entry point to the React Application
- Now we can continue our react application..
- To fix the issue of 'Cannot Get/URL on Refresh' followed this guide: https://youtu.be/EDJW88iVORA
  - Added historyApiFallback: true in webpack.config.js
  - Added publicPath: "/" in webpack.config.js
