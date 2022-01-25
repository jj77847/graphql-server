const { ApolloServer, gql } = require("apollo-server");

const moviesFromDB = [
  {
    id: "1001",
    title: "movie 1",
    runtime: 90,
    director: {
      firstName: "Bob",
      lastName: "Smith",
    },
  },
  {
    id: "2002",
    title: "movie 2",
    runtime: 120,
    director: {
      firstName: "Bob",
      lastName: "Smith",
    },
  },
  {
    id: "3003",
    title: "movie 3",
    runtime: 100,
    director: {
      firstName: "Dan",
      lastName: "Smith",
    },
  },
  {
    id: "4004",
    title: "movie 4",
    runtime: 90,
    director: {
      firstName: "Jane",
      lastName: "Smith",
    },
  },
];

const directorsFromDB = [
  {
    firstName: "Bob",
    lastName: "Smith",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
  },
  {
    firstName: "Dan",
    lastName: "Smith",
  },
];

// Step 1: Define schema or type definitions
const typeDefs = gql`
  type director {
    firstName: String
    lastName: String
  }

  type movie {
    id: ID
    title: String
  }

  type Query {
    # all your queries here
    movie: [Movie]
    director: [Director]
  }
`;

// Step 2: Define your resolvers
const moviesResolver = () => {
  // return value should respect schema
  return moviesFromDB;
};

const directorsResolver = () => {
  // return value should respect schema
  return directorsFromDB;
};

const resolvers = {
  Query: {
    movies: moviesResolver,
    director: directorsResolver,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
