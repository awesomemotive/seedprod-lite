module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["plugin:vue/strongly-recommended"],
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2, {"SwitchCase": 1}],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["error", {"max": 1}],
    "vue/comma-dangle": [2, "never"],
    "comma-dangle": [2, "always-multiline"],
    "no-var": ["warn"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    yoda: ["error", "always"],
  }
};
