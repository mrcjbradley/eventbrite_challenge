## Set Up

1. Clone this repo
2. If you don't already have an account with Eventbrite, create one and login to https://www.eventbrite.com/platform/api
3. Locate your API key at https://www.eventbrite.com/platform/api-keys
4. Create a file in `./config` called `secret.js`
   ```Javascript
       export default secret = {
           key: "<YOUR API KEY>"
       };
   ```
5. Using EventBrite's API, create an application that will display the first 10 events in a given category within x miles of y location, where x and y are inputs from the user. See the attached design for style specs.
6. Please provide any runtime instructions to start your app if they go beyond setting up our own `secret.js` file and running `npm run start`.
