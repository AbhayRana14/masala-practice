import { createApplication } from "graphql-modules";
import { flavourModule } from "./modules/FlavourModule/flavourmodule";

export const application = createApplication({
  modules: [flavourModule],
});

export const mySchema = application.schema;
