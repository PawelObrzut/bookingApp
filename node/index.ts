import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
const schema = require("./src/schemas/index");
const cors = require('cors');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.get("/",  (req: Request, res: Response) => {
  res.send("Czesc mordeczko")
});

app.use( "/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
