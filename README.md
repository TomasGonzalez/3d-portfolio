# What is 3d-portfolio?

3d-porfolio is a higlhy customizable dev portfolio that features astonishing 3D graphics by taking advantage of webGL.

It is built using threejs, react-three-fiber, and @three-fiber/drei.

Created by Tomas Gonzalez.

## Get started!

Start by cloning this repository and navigating into the root directory.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploy to github pages

First make sure to create a `gh-pages` branch.

After pushing the branch to GitHub, head over to the `Settings` page of the repository and select in the `GitHub Pages` section the `gh-pages` branch as source.

After that run:

### `yarn deploy`

Builds and deploys the app for production, this proyect deployment comes already configured with hg-pages, 
It will automatically deploy to `https://{username}.github.io/{repo-name},`
