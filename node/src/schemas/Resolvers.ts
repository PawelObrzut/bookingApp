import UpcommingMovies from "./UpcommingMovies.json";

export const resolvers = {
  Query: {
    getMovies() {
      return UpcommingMovies;
    }
  }
};

module.exports = { resolvers };
