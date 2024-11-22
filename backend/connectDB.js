import { MongoClient } from "mongodb";
const connectionString =
  "mongodb+srv://mglgerelt:VmaUhczrxg9VHGmb@gereltbaatardata.1cupz.mongodb.net/";
const connectiondb = async () => {
  {
    const client = new MongoClient(connectionString);
    let connection;
    try {
      connection = await client.connect();
    } catch (e) {
      console.error(e);
    }
    let db = connection.db("food-delivery");
    return db;
  }
};
export default connectiondb;
