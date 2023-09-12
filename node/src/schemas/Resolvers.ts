import DATA from "./MockDATA.json";

export const resolvers = {
  Query: {
    getMovies() {
      return DATA
    },
  },
};

module.exports = { resolvers };