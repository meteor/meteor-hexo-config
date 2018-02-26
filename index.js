// We return the only the absolute path to the config so that
// [`chexo`](https://npm.im/chexo) can automatically include it for us.
module.exports = require("path").resolve(__dirname, "_config.yml");
