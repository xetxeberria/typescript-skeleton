module.exports = {
  extends: ["eslint-config-codely", "plugin:editorconfig/all"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  plugins: ["editorconfig"],
};
