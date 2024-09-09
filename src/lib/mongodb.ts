import mongoose from "mongoose";

//เอามาจาก MongoDB ของตัวเอง
const uri =
  "mongodb+srv://nunthiphatb:0bde955iCdMKEkwn@cluster0.1fzv9.mongodb.net/";

let cachedDb: mongoose.Connection | null = null;

export async function connectToDatabase() {
  if (cachedDb) return cachedDb;
  const opts = { dbName: "Todo-app"};
  const conn = await mongoose.connect(uri, opts);
  cachedDb = conn.connection;
  return cachedDb;
} 