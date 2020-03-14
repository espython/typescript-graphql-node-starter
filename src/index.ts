import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";

// import utils from "./utils/utils";
import Queries from "./resolvers/Queries";
import Mutations from "./resolvers/Mutations";

// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `./src/schema.graphql`;

const resolvers = {
  Query: Queries,
  Mutation: Mutations
};

const connectDb = async (retries = 5) => {
  while (retries) {
    try {
      await createConnection();
      console.log(`connection has been created Successfully`);
      console.log(`test git-hub deployment`);
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      // wait 5 seconds
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
// using coockie parser as a middleware
server.express.use(cookieParser());
connectDb()
  .then(() => {
    server.start({ port: 4000, endpoint: "/graphql" }, () => {
      console.log("Server is running on localhost:4000");
    });
  })
  .catch(error => console.log(error));
