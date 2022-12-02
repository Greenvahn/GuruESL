# ELS Guru
This is an unnoficial single page app based on the card's game Elder Scrolls: Legends. The project is currently under construction.

**This project is NOT produced, endorsed, supported, or affiliated with ZeniMax Media Inc.**
## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It also uses:
* [Node.js](https://nodejs.org/en/download/)
* [NPM](https://www.npmjs.com/)
* [Tailwindcss](https://tailwindcss.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### `npm run deploy`

Deploys on [github pages](https://github.com/gitname/react-gh-pages). Target URL is [https://greenvahn.github.io/GuruESL/](https://greenvahn.github.io/GuruESL/)

**Note**

> GitHub Pages doesn’t support routers that use the HTML5 pushState history API under the hood (for example, React Router using `browserHistory`). 

This SPA uses a custom ``404.html`` file and custom code on `index.html` ( both in the public folder). For further info check the GitHub Pages to handle 404s by redirecting to your index.html from [client side routing](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing)


## API

This SPA uses **unnofficial API** of [The Elder Scrolls: Legends](https://elderscrollslegends.io/) - API by [Andrew Backes](https://andrewbackes.com/). Please refer to the links above for any matters realted to the API.

<p align="center"><img alt="ESLgury diagram" width="60%" height="60%" src="https://github.com/Greenvahn/GuruESL/blob/master/diagram/ESLcards_sm.jpg?raw=true"></p>

## Typescript support
* https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
* https://learnxinyminutes.com/docs/typescript/
* https://dev.to/ornio/container-view-pattern-in-react-inc-hooks-5404
* Type Assertions => https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

## To Do

* ~~Create card list~~
  * ~~Use dummy data~~
* ~~Create single unit card~~
* ~~Move search bar to center page~~
* ~~Implement fetching API (Axios)~~
  * ~~https://elderscrollslegends.io/~~
* ~~Add Formsearch states~~
  * Text format, graphic

* Add search filters and stats
* Create/design logo
* Hover-over effect on cards
* Create About page
  * Basic content
* Complete Home page
