# Cinema Web Application

This is a mvp of what I intend to build which is a cinema booking application. One can browse through repertoire, book a ticket, watch a trailer or read a description as well as write their own comments about the movies.

With this project I explore the nestjs as a backend framework, typeOrm as accesing database (mongoDB) and graphQL as architecture to fetch for content. I am building Frontend using React-vite framework with single page application approach, styling is delivered using Sass and state management using redux toolkit.

***

You can see the project live at:
https://cinemaapp-nqbn.onrender.com/

![preview3](/preview3.png)

![preview2](/preview2.png)

***

### Plan to develop this application further:


There are many areas I wish to improve thus next published versions might differ substantional from this mvp.

List of ideas to add to the project:

    > add a calendar and repertuar for the whole upcomming week
    > add a log-in and registration functionality
    > improve redux logic
    > add reviews section
    > migrate from No-SQL to key-value database like couchbase
    > add querrying tmdb for more content e.g.: get trailer youtube links
    > write unit and e2e tests

## Getting Started

Copy the repository and install dependencies in client and server directories. 

You will need to create **.env** file in the client with ```VITE_API_URL``` variable equal to url you wish the application to run at. 

Another **.env** is required in the node directory with variables describing the ```PORT```, ```MONGO_DATABASE```, ```MONGO_USER```, ```MONGO_PASSWORD``` and ```MONGO_CLUSTER```


**Start ReactAPP**

```bash
cd client
npm install
npm run dev
```


**Start BackEnd**
```bash
cd node-nest-graphql
npm install
npm run start:dev
```

**Start Database**

You need an instance of mongoDB with collections

    * movies
    * showtimes

You may use .json files in the root folder as a source to feed your database collection.

***
