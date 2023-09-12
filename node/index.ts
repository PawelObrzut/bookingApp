import { ApolloServer } from 'apollo-server-express';
import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
const cors = require('cors');

import { typeDefs } from "./src/schemas/TypeDefs";
import { resolvers } from "./src/schemas/Resolvers";

const app: Express = express();
const server = new ApolloServer({ typeDefs, resolvers });
app.use(cors());

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer().then(() => {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});