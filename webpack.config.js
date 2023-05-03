const path = require("path");
const srcScriptsPath = path.resolve(__dirname, 'src', 'behavior_pack', 'scripts');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tsconfig = require(path.join(srcScriptsPath, "tsconfig.json"));

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: path.join(srcScriptsPath, "index.ts"),
  devtool: 'source-map',
  mode: "production",
  target: ["es2020"],
  // ------ ^
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    fallback: {
      'buffer': false,
      'inspector': false,
      'os': false,
      'path': false,
      'fs': false
    },
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(srcScriptsPath, "tsconfig.json"),
      }),
    ],
  },
  optimization: {
    minimize: false,
  },
  output: {
    filename: "index.js",
    path: path.resolve(srcScriptsPath, tsconfig.compilerOptions.outDir),
  },
  experiments: {
    outputModule: true,
  },
  externalsType: "module",
  externals: {
    "@minecraft/server": "@minecraft/server",
    "@minecraft/server-ui": "@minecraft/server-ui",
    "@minecraft/server-admin": "@minecraft/server-admin",
    "@minecraft/server-gametest": "@minecraft/server-gametest",
    "@minecraft/server-net": "@minecraft/server-net",
  },
};
