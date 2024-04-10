import { gql } from "graphql-modules";

export const DescriptionModule = gql`
  type DescriptionObject {
    title: String
    points: [String]
  }

  extend type FlavourObject {
    description: DescriptionObject
  }
`;
