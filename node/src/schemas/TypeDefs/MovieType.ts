import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    overview: { type: GraphQLString },
    release_date: { type: GraphQLString },
    video: { type: GraphQLString },
    poster_path: { type: GraphQLString },
    backdrop_path: { type: GraphQLString },
    vote_average: { type: GraphQLInt },
  }),
});

module.exports = MovieType;