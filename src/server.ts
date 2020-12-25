import { ApolloServer, gql } from 'apollo-server'


const posts = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        body: 'Priemriio post feito',
        datePosted: '01.01.2021'
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        body: 'Segundo post feito',
        datePosted: '01.01.2021'
    },
];

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Post" type defines the queryable fields for every post in our data source.
  type Post {
    author: String
    title: String
    body: String
    datePosted: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "posts" query returns an array of zero or more Posts (defined above).
  type Query {
    posts: [Post]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves posts from the "posts" array above.
const resolvers = {
    Query: {
      posts: () => posts,
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
