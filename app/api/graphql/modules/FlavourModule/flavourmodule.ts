import { createModule } from "graphql-modules";
import { FlavourModuleResolver } from "./flavourmodule.resolver.graphql";
import { FlavourModule } from "./flavourmodule.type.graphql";
import { DescriptionModule } from "./descriptionmodule.type.graphql";

export const flavourModule = createModule({
  id: "flavourmodule",
  dirname: __dirname,
  typeDefs: [FlavourModule, DescriptionModule],
  resolvers: [FlavourModuleResolver],
});
