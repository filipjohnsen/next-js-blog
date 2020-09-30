import { ApolloServer, gql } from 'apollo-server-micro'

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },

]

const typeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }
`

const resolvers = {
  Query: {
    books: () => books,
  },
};


const server = new ApolloServer({ typeDefs, resolvers })
const handler = server.createHandler({ path: "/api/graphql" })

export default handler

export const config = {
  api: {
    bodyParser: false
  }
}

console.log("Graphql server open at: http://localhost:3000/api/graphql")