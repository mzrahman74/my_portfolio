import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
  entry: "./app/index.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    hot: true
  },
  plugins: [new HtmlWebpackPlugin({ template: "../app/views/index.ejs" }), new HtmlWebpackPlugin({ template: "../app/views/about.ejs" }), new HtmlWebpackPlugin({ template: "../app/views/contact.ejs" }), new HtmlWebpackPlugin({ template: ".../app/views/partials/footer.ejs" }), new HtmlWebpackPlugin({ template: ".../app/views/partials/header.ejs" })],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader"
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader"
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader"
          },
          {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: "/node_modules"
          },
          {
            test: /\.ejs$/i,
            use: ["html-loader", "template-ejs-loader"]
          }
        ]
      }
    ]
  }
};
