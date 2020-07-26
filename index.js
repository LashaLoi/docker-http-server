import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (_, res) =>
  res.json({
    hello: "world",
  })
);

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
