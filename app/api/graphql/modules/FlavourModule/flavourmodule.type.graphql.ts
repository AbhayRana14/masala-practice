import { gql } from "graphql-modules";

export const FlavourModule = gql`
  directive @rateLimit(max: Int, window: String, message: String) on FIELD_DEFINITION

  type Query {
    Flavour: [FlavourObject]! @rateLimit(window: "5s", max: 10, message: "Too many calls!")
    GetFlavourById(id: ID!): FlavourObject! @rateLimit(window: "5s", max: 10, message: "Too many calls!")
  }

  type FlavourObject {
    id: ID
    price: String
    title: String
    weight: String
    ingredients: String
    vegeterian: Boolean
    recipePoints: [String]
    recipeCookingSteps: [String]
  }
`;
