module.exports = {
  extends: ["plugin:@docusaurus/recommended"],
  rules: {
    "@docusaurus/no-untranslated-text": [
      "warn",
      { ignoredStrings: ["·", "—", "×"] },
    ],
  },
};
