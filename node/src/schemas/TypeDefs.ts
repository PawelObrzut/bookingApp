import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Movie {
    id: Int!
    adult: Boolean!
    backdrop_path: String!
    genres: [String!]!
    overview: String!
    popularity: Float!
    poster_path: String!
    release_date: String!
    title: String!
    video: String
    vote_average: Float!
    vote_count: Int!
    reviews: [Review!]!
    showtimes: [Showtime!]!
  }

  type Review {
    id: String!
    author: String!
    rating: Float!
    comment: String!
  }

  type Showtime {
    id: Int!
    movieId: Int!
    dateTime: String!
    theater: String!
    availableSeats: Int!
    totalSeats: Int!
    tickets: [Ticket!]!
  }

  type Ticket {
    id: Int!
    showtimeId: Int!
    seatNumber: String!
    price: Float!
  }

  type Query {
    getMovies: [Movie!]!
    getMovie(id: Int!): Movie
    getReviews(movieId: Int!): [Review!]!
    getShowtimes(movieId: Int!): [Showtime!]!
    getAvailableSeats(showtimeId: Int!): Int!
  }

  type Mutation {
    addReview(movieId: Int!, author: String!, rating: Float!, comment: String!): Review
    bookTicket(showtimeId: Int!, seatNumber: String!, price: Float!): Ticket
  }
`;

module.exports = { typeDefs };