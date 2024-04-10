import { IdentifyFn, useRateLimiter } from "@envelop/rate-limiter";
import { createYoga } from "graphql-yoga";
import { application, mySchema } from "./application";
import { useGraphQLModules } from "@envelop/graphql-modules";
import { useDisableIntrospection } from "@graphql-yoga/plugin-disable-introspection";
import * as mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string);
mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error: " + err);
});

const identifyFn: IdentifyFn = (context: any) => {
  return context.request.ip;
};

const { handleRequest } = createYoga({
  schema: mySchema,

  graphqlEndpoint: "/api/graphql",

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Request: Request, Response: Response },

  plugins: [
    useRateLimiter({
      identifyFn,
    }),
    useGraphQLModules(application),
    useDisableIntrospection({
      isDisabled: () => (process.env.RUNTIME === "LOCAL" ? false : true),
    }),
  ],
});

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS };
