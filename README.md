## About Hackages - Wheel of Fortune

Hackages Wheel of Fortune is a project started at one of Hackage's Hack Days. It is a fun way for participants at the Hackjams to sign up for a raffle for prizes that are given away at each workshop. 

It features a simple sign-up form that validates names with a certain length and email addresses, and a wheel that picks a random number when spun, which represents the index of a participant in a list.

This project was created with [React](https://github.com/facebook/create-react-app) and uses a simple Node.js (Express) server in the backend.

## CSS - Learnings

There are many ways to create the wheel, and there are many libraries like React-Vis or D3.js that can help create what is essentially a piechart.

After experimenting with various CSS techniques, the final version on the deploy branch uses conic-gradients to dynamically add new slices and a color coded legend for each name.

## Getting Started

First clone this repo and run `yarn` or `yarn install`.

## Set an Admin Password
In the .env file, create a secret admin password, which can be used to clear the wheel of all participants for each new session.

## Available Scripts

To start the server, run the following:

### `node index.js`

Runs the server in the development mode, which also serves the static files on production.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `npm start`

To start the client, run `cd client` and `yarn start` <br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Then sign up some users and click the Hackages logo in the middle to spin the wheel!






