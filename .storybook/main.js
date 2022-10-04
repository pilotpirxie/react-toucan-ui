module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        sassLoaderOptions: {
          implementation: require("sass"),
        },
        rule: {
          test: /\.(scss|sass)$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
          include: path.resolve(__dirname, "../"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
