# SUMMIT Outdoor Supplies Dashboard

## Description
The SUMMIT Dashboard will be a one stop shop for retail management of the SUMMIT outdoor supplies online retail arm. As additional features are built out, the dashboard will be able to generate real-time displays of useful business data. Additionally, order and customer information will be tracked. The current functionality includes a login page, custom 404 page, and dashboard template. The dashboard defaults to a product view panel. Newly added functionality includes a product add panel which allows the addition and live preview of products for inclusion in the database.

## Current Work
- ProductEditor built out and added to Add Products Panel
- Upload confirmation added
- View Products now pulls product data from the database and dynamically renders the product cards
## Future Work
- adding edit and delete functionality to product card buttons
- updates to add additional functionality for editing existing products
- payment services
- retail (customer-facing) side of the website

## Current Pages
![image](https://user-images.githubusercontent.com/65042664/162557015-917975b4-40a9-4a14-8e15-3561b69bb9d2.png)
View Products Page

![image](https://user-images.githubusercontent.com/65042664/162557054-40419037-abe3-46ab-9f9c-b33d451bcf8e.png)
Add products page

![image](https://user-images.githubusercontent.com/65042664/162557067-d67e72c0-264f-40e7-aaf6-2605263b01c5.png)
Upload confirmation page

### Dependencies
React Dropzone is used for image upload.
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
