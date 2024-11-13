import express from "express";
import cors from "cors";

const server = express();
const PORT = 4000;

server.use(cors());

server.get("/", (_, response) => {
  response.send("server is live");
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
