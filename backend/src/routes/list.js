import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const search = req.query.search;

  let query = "SELECT * FROM offers";
  let params = [];

  if (search) {
    query += " WHERE title LIKE ?";
    params.push(`%${search}%`);
  }

  db.all(query, params, (err, rows) => {
    console.log("data", rows)
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

export default router;
