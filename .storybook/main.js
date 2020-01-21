module.exports = {
  stories: ["../src/**/*.stories.(jsx|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "storybook-addon-react-live-edit/dist/register",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {}
      }
    },
    "@storybook/addon-knobs/register",
    "@storybook/addon-a11y/register"
  ]
};
