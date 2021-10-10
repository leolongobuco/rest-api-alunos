module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    quotes: "double",
<<<<<<< HEAD
    "class-method-use-this": "off",
=======
    "no-param-reassing": "off",
>>>>>>> develop
  },
};
