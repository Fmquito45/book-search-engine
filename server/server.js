const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');

const { ApolloServer } = require('@apollo/server');
const { authMiddleWare }  = require('./utils/auth.js')
const { typeDefs, resolvers } = require('./schemas')

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer ({
  typeDefs,
  resolvers,
  context: authMiddleWare,
})


const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
   
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }
  
  // Important for MERN Setup: Any client-side requests that begin with '/graphql' will be handled by our Apollo Server
  app.use('/graphql', expressMiddleware(server));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();

