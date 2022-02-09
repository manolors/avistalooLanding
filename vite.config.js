const path = require("path");
const mode = "development";
const base = mode === "production" ? "/" + path.basename(process.cwd()) + "/" : "/";

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
