# Test app with Media Platforms UI Kit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses a barebones webpack config to test successful rendering of components from the published [@media-platforms/ui-kit](https://storybook.hearstapps.com/?path=/story/documentation-readme-ui-kit--page) package in an app without [nextjs](https://nextjs.org). This config and app is by no means meant for production use or even as a good example of configuration for use of this package. Please see [@media-platforms/fre](https://github.com/Media-Platforms/fre) for examples of proper UI kit usage.

# Important

@media-platforms/dynamic-svg-react has peerDependency requirements of react 16-18.3.0, which will have to be changed to allow use of react 19. As is right now, the @media-platforms/dynamic-svg-fre package installs react v 18.3.0, which conflicts with the other react version used by fre published packages and causes a failure rendering.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
