import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";
import './database/appDataSource';
import routes from "./routes";

dotenv.config()

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
