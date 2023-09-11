import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fetch from 'node-fetch';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.APIReadAccessToken}`,
  },
};


app.get("/",  (req: Request, res: Response) => {
  res.send("Czesc mordeczko")
})

app.get("/getMovies", (req: Request, res: Response) => {
  const url = "https://api.themoviedb.org/3/movie/upcoming";

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  res.send("Express + TypeScript Server");
});

app.get("/getMovieVideo", (req: Request, res: Response) => {
  const url = "http://api.themoviedb.org/3/movie/346698&append_to_response=videos";

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  res.send("Express + TypeScript Server");
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
