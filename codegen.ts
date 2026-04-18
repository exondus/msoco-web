import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://www.msocorockers.co.za/graphql", 
  documents: ["src/lib/queries.ts", "src/**/*.tsx"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
