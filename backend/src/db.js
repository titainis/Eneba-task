// db.js
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

db.serialize(() => {
  // 1. Create the table if it doesn't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS offers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      imageUrl TEXT,
      platform TEXT,
      region TEXT,
      store TEXT,
      price REAL,
      originalPrice REAL,
      discountPercent INTEGER,
      cashbackAmount REAL,
      likesCount INTEGER
    )
  `);
});

export default db;