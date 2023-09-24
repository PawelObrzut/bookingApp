# Cinema Web Application
Welcome to the Cinema Web Application! This project is designed to help users explore movie repertoire and book tickets with a user-friendly interface.

***

List of tasks for the FrontEnd

1. Set-up react-vite _(done)_
2. Add redux tlk _(inProgress)_
3. Add Sass for easy maintnence of styling
    - create modules for each component _(done)_
    - create global variables (colors, paddings, margins) and apply it throughout the application
    - use media queries for styling content for differenct screen sizes _(inProgress)_
3. Create Single Page Application
    - wrap add with browser router _(done)_
    - indicate active route on header-navBar
    - create layout for homepage
    - create layout for reperoire _(inProgress)_
        - Build Infinite Slider without help from external library. Now I am using react-slick which is fine but turns of functionality when all items are visible (min-with: 1200px) 
    - create layout for movies
    - create mobile menu _(done)_
    - create layout for 404 not found route
    - create layout for booking ticket
4. Add session or JWT authentication
5. Fetch content from the BackEnd _(inProgress)_
    - set Apollo Client

***

List of task for the BackEnd

1. Set up node server _(done)_
2. Connect to db _(done)_
    - connection with TypeOrm _(done)_
3. Create API structure and expose endpoints for 
    - upcoming movies _(done)_
    - repertoire _(inProgress)_
    - book a ticket
4. Fetch Data form TheMovieDataBase API
    - periodically update content using webhooks
5. Authenticate users

***

List of task for the Database

1. Create DB _(done)_
    - create collections _(partially done)_
    - create content _(partially done)_

2. Set MongoCompas for the development process

3. Decide on data structure and relations

***

## Getting Started
Clone the repository to your local machine.

#### Start FrontEnd
Change directory to client and install dependecies. Run project locally.

```bash
cd client
npm install
npm run dev
```

#### Start BackEnd
Change directory to node-nest-grapgql and install dependecies. 
Create the __.env__ file in the root of the project

```bash
PORT=9000
MONGO_DATABASE="Cinema-GraphQL" (*)
MONGO_USER="User"
MONGO_PASSWORD="Password"
MONGO_CLUSTER="Cluster"
```
(*) TypeOrm reference the name of db and collection they need to match for correct conection

Run project locally.

```bash
cd node-nest-grapgql
npm install
npm run start:dev
```

Open your browser at
http://localhost:5173/repertoire