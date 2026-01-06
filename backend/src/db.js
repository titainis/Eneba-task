import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("DB error:", err);
  } else {
    console.log("SQLite connected");
  }
});

export default db;
