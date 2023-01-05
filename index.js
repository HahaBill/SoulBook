const { ApolloServer, PubSub } = require('apollo-server');
// const { PubSub } = require('graphql-subscriptions');
const mongoose = require('mongoose');


const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

// const app = express();
// const httpServer = createServer(app);
// // Creating the WebSocket server
// const wsServer = new WebSocketServer({
//     // This is the `httpServer` we created in a previous step.
//     server: httpServer,
//     // Pass a different path here if app.use
//     // serves expressMiddleware at a different path
//     path: '/graphql',
// });
  
//   // Hand in the schema we just created and have the
//   // WebSocketServer start listening.
// const serverCleanup = useServer({ schema }, wsServer);

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub }),
});



// async function startServer() {
//     await server.start();
// };

// startServer().then(() => {
//     app.use('/graphql', cors(), json(), expressMiddleware(server));
// })

// const PORT = 4000;
// mongoose
//     .connect(MONGODB, { useNewUrlParser: true })
//     .then(() =>{
//         console.log('MongoDB Connected')
//         return httpServer.listen(PORT, () => {
//             console.log(`Server is now running on http://localhost:${PORT}/graphql`);
//         });
//     })
//     .then(res => {
//         console.log(`Server running at ${res.url}`)
//     })

mongoose
    .connect(MONGODB, { useNewUrlParser: true })
    .then(() =>{
        console.log('MongoDB Connected')
        return server.listen({ port: 5001 })
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })
