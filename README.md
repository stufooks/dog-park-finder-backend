# Dog Park Finder Back End

This is the back end repository for a full stack web application called Dog Park Finder. 

- The front end repository can be found [here](https://github.com/jessicasklee/Dog-Park-Finder---Front-End).
- The deployed back end can be found [here](https://dog-park-finder.herokuapp.com/parks).
- The deplpyed front end can be found [here](http://dog-park-finder.surge.sh/).


## Description
This API stores information about dog parks that is uploaded by users on the front end. The API then serves JSON data representing all the uploaded dog parks. The API also stores users of the front end Dog Park Finder application, and use that data for authentication when users upload and delete dog parks.

## Brief Example
A GET request to ```https://dog-park-finder.herokuapp.com/parks``` would return an array of JSON objects, with each object representing a park. This get request would return all parks, whereas a GET request to ```https://dog-park-finder.herokuapp.com/parks/:id``` would return information on a specific park.

## Features
Beyond the two GET requests mentioned above, the API can also handle PUT, POST, and DELETE requests. The Park model (containing all dog parks) handles each of these requests, with users on the front end being able to view all parks, add a new park, update a park through "upvoting" or "downvoting" a park, and delete a park that they have uploaded. The User model can handles only post requests for logging in and signing up for an account.

## Technologies Used
For this app we used the MERN stack:
- Mongoose/MongoDB
- Express.js
- React.js
- Node.js

In addition we used the Google Maps API, Passport and JWTs for authentication, as well as Heroku, MLAB, and Surge for deployment. We also used CORS to allow for cross-origin sources.

## Installation
Fork and clone down this repo, and then run `npm install` in your cli. Make sure you have MongoDB running in the backgound and you're all set! 