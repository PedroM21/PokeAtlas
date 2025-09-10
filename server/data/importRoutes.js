import { MongoClient } from "mongodb";
import fs from "fs";

const uri = "mongodb://localhost:27017"; // change if using MongoDB Atlas
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    const db = client.db("pokeatlas"); // database name
    const collection = db.collection("routes"); // collection name

    // Read your JSON file
    const data = JSON.parse(fs.readFileSync("routes.json", "utf8"));

    // Optional: clear existing collection first
    await collection.deleteMany({});

    // Insert all Pokémon
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} Routes inserted successfully!`);
  } catch (err) {
    console.error("Error importing Routes:", err);
  } finally {
    await client.close();
  }
}

main();
