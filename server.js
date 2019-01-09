// import express from 'express'
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

// const server = express()

// server.use('/graphiql', graphiqlExpress({
//   endpointURL: "/graphql"
// }))

// server.listen(4000, () => {
//     console.log('> listening on port 4000')
// })
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`> Server ready at http://localhost:4000${server.graphqlPath}`),
)
