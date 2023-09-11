import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import DATA from "../../MockDATA.json";
const MovieType = require("./TypeDefs/MovieType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllMovies: {
      type: new GraphQLList(MovieType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return DATA;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: MovieType,
      args: {
        title: { type: GraphQLString },
        overview: { type: GraphQLString }
      },
      resolve(parent, args) {

        return args 
      }
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });