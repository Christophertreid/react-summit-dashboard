# SUMMIT Outdoor Supplies Dashboard

## Description
The SUMMIT Dashboard will be a one stop shop for retail management of the SUMMIT outdoor supplies online retail arm. As additional features are built out, the dashboard will be able to generate real-time displays of useful business data. Additionally, order and customer information will be tracked. The current functionality includes a login page, custom 404 page, and dashboard template. The dashboard will
eventually be linked to the retail side of the website.

## Current Work
- Product Card built out
- routing is now protected
- dashboard panels are nested
## Future Work
- updates to add additional functionality for adding products
- payment services
- retail (customer-facing) side of the website

## Current Pages
![image](https://user-images.githubusercontent.com/65042664/158004106-3636684a-2630-4161-b031-4bf0d03ad5d9.png)
Login page

![image](https://user-images.githubusercontent.com/65042664/158004113-0edf62de-c299-42dc-bbf1-2d074b678585.png)
404 page

![image](https://user-images.githubusercontent.com/65042664/160213278-7bda0c3d-eceb-4bda-a51e-ffc594c3936c.png)
Revised Dashboard template with additional product pages 

### Dependencies
Firebase is used for authentication and will be used for the database/storage.
React-Toastify messages are used for error message handling.
Styled Components are used for styling.


## Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
