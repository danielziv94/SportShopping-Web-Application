const dotenv = require("dotenv");
const app = require("./src/api");
dotenv.config();

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
