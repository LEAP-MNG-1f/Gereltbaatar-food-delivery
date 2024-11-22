import { MongoClient } from "mongodb";
const connectionString =
  "mongodb+srv://mglgerelt:eibUeScDttZ5r79Y@gereltbaatardata.1cupz.mongodb.net/";
const connectDB = async () => {
  const client = new MongoClient(connectionString);
  let connection;
  try {
    connection = await client.connect();
  } catch (e) {
    console.error(e);
  }
  let db = connection.db("sample_mflix");
  return db;
};

export default connectDB;
