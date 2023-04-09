// @ts-check

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
  extends: [
    "plugin:@trevorblades/react",
    "plugin:@trevorblades/typescript",
    "plugin:tailwindcss/recommended",
    "plugin:mdx/recommended",
    "plugin:prettier/recommended",
  ],
};

module.exports = config;
