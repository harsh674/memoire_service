require("@babel/register")({
  ignore: [/node_modules/], // Ignore node_modules during transpilation
  presets: ["@babel/preset-env"],
});

require('../index');



