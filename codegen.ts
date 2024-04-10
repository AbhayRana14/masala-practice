import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.API_URL,
  documents: ["app/*/.tsx", "app/*.tsx"],
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    "./app/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
