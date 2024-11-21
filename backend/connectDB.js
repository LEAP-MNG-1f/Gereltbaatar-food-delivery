import { MongoClient } from "mongodb";
const connectionString = process.env.MONGODB_URL || "";
const client = new MongoClient(connectionString);
let connecttion;
try {
  connecttion = await client.connect();
} catch (e) {
  console.error(e);
  console.log("test");
}
let db = connecttion.db("sample_training");

export default db;
