const path = require("path");
const mode = "development";
const base = "/";

module.exports = {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./assets"
  }
};
