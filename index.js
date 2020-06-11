module.exports = {
  configs: {
    react: {
      plugins: ["eslint-plugin-react", "eslint-plugin-react-hooks"],
      settings: {
        react: {
          version: "detect",
        },
      },
      extends: [
        // React stuff
        "plugin:react/recommended",
      ],
      rules: {
        // Maybe turn this on in the future, atm its just annoying with typescript
        "react/prop-types": 0,
      },
    },
    nextjs: {
      ignorePatterns: ["next-env.d.ts", "next.config.js"],
    },
    graphql: {
      ignorePatterns: ["*.graphqls.d.ts", "*.graphql.d.ts"],
    },
    recommended: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json", // Used by typescript
        tsconfigRootDir: __dirname, // Used by typescript
      },
      ignorePatterns: ["coverage/", ".eslintrc.js", "babel.config.js"],
      settings: {
        "import/resolver": {
          typescript: {}, // this loads <baseDir>/tsconfig.json to eslint
        },
      },
      plugins: [
        "@typescript-eslint",
        "eslint-plugin-tsdoc",
        "eslint-plugin-jest",
        "eslint-plugin-import",
      ],
      extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",

        // Typescript setup
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",

        // Opinionated default settings - quite strict :)
        "plugin:unicorn/recommended",

        // Jest
        "plugin:jest/recommended",
        "plugin:jest/style",

        // Yo dawg, we like eslint so we put your eslint in your eslint
        "plugin:eslint-comments/recommended",

        // Prettier
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
        "prettier/unicorn",
      ],
      rules: {
        "tsdoc/syntax": "warn",

        // Use the config file instead so you get proper typings
        "no-process-env": "error",

        // Weird rule conflicts force us to turn this back on
        camelcase: ["error", {}],

        // Try and make this run slightly less annoying
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": [
          "off", // Turning this off until it works better with graphql-tools
          {
            allowTypedFunctionExpressions: true,
          },
        ],
        // Support ReactComponent.tsx style names.
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              kebabCase: true,
              pascalCase: true,
            },
          },
        ],

        // Don't understand why this isn't the default
        "eslint-comments/disable-enable-pair": [
          "error",
          { allowWholeFile: true },
        ],
        "eslint-comments/require-description": ["error", { ignore: [] }],

        /**
         * Currently buggy - probably should be turned off in the future. Looks like PR has been merge but no updated released
         */
        "import/default": 0,
      },
    },
  },
};
