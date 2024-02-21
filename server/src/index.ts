import express from "express";
import run from "./common/db";

const app = express();
const PORT = 3000;

app.get("/health-check", (e) => {
  console.log(e);
});

app.listen(PORT, () => {
  run()
    .then(() => {
      console.log("connected to DB");
    })
    .catch(() => {
      console.log("Failed to connect to DB");
      process.exit(1);
    });
  console.log(`serverasdaasdassd is up on http://localhost:${PORT}`);
});
