This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Important Notes
1. As per the requirement I have created variable for timedelay inside src/store/sqrt/epic, by which you can add time in milliseconds.
2. While duirng testing it was also found once API response comes after 11 sec naturally, so make sure to keep this thing when testing functionality.
3. As per the browser policies I need to handle CORS functionality so I choose an Heroku based url, since Heroku goes sometimes sleep so in that case it could show error message instead of correct response.
4. I have also added retry process if something goes wrong when user communicating with API, for testing it also has the same path i.e. src/store/sqrt/epic. Feel free to update the variable and use a wrong keyword in the last of URL in file src/services/sqrt & check on the network tab of browser to see the results.
5. For incorrect input data, I am using button disabled functionality. If user enters otherthan number input it won't enabled submit button. Only number input is allowed to submit form.