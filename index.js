const core = require("./app");
core.listen(5432, () => {
  console.log(`running on : http://localhost:${5432}`);
});
