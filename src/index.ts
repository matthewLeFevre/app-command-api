import createServer from "./server";
import dotenv from "dotenv";
import Rectify from "rectifyjs";
dotenv.config();

(async function () {
  const TEST_DB = await Rectify.build({
    db: <string>process.env.RETHINK_DB_NAME,
    host: <string>process.env.RETHINK_DB_HOST,
    port: parseInt(<string>process.env.RETHINK_DB_PORT),
    tableNames: ["users", "projects"],
  });

  createServer(TEST_DB).listen(process.env.PORT, () => {
    console.log(`Starter service project running on port ${process.env.PORT}`);
  });
})();
