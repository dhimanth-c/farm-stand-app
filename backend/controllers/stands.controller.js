import pool from "../db.js";

const index = (req, res) => {
  pool.query("SELECT * FROM stand", (err, result) => {
    if (err) {
      res.status(500).json({ "Error executing query": err.stack });
    }
    res.status(200).json(result.rows);
  });
};

export default { index };
