import { ApolloServer } from "apollo-server-express";
import express, { Express, Response } from "express";

import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
const cors = require("cors");

import { typeDefs } from "./src/schemas/TypeDefs";
import { resolvers } from "./src/schemas/Resolvers";

const app: Express = express();
const server = new ApolloServer({ typeDefs, resolvers });
app.use(cors());

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

console.log("ENV: ", process.env.PORT)

app.get("/movies/:title", (req, res: Response) => {
  const title = req.url.slice(8)

  const url = `https://api.themoviedb.org/3/search/movie?query=${title}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.APIReadAccessToken}`,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      console.log('success')
      res.json(json)
    })
    .catch((err) => console.error("error:" + err));
});

app.get("/movies/video/:id", (req, res: Response) => {
  const id = req.url.slice(14)
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.APIReadAccessToken}`,
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => res.json(json))
    .catch(err => console.error('error:' + err));

});

startApolloServer().then(() => {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
