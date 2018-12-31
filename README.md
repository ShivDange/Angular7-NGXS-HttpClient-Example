# State Management In Angular using NGXS With HttpClient

This project was generated with [Angular version 7.1.1].
In the State Management In Angular using NGXS of this series I covered the basics concepts of NGSX using a simple example. In this we’ll look at how NGXS can be used to deal with external systems such as a HTTP call to get a json payload.

NGXS takes a similar approach to the manner in which React Redux deals with external system calls by placing them inline in the Action function.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Get a full fake REST API with zero coding

Install JSON Server
npm install -g json-server

In Watch Directory run command
Start JSON Server
json-server --watch db.json

Now if you go to http://localhost:3000/users, you'll get response
