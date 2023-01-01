import pool from "../db.js";

const index = async (req, res) => {
  try {
    const allStands = await pool.query("SELECT * FROM stand ORDER BY id");
    res.status(200).json(allStands.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const newStand = async (req, res) => {
  try {
    const { name, description, location, image } = req.body;
    const newStand = await pool.query(
      "INSERT INTO stand (name, description, location, image) VALUES($1, $2, $3, $4) RETURNING *",
      [name, description, location, image]
    );
    res.status(200).json(newStand.rows[0]);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const viewStand = async (req, res) => {
  try {
    const { id } = req.params;
    const stand = await pool.query("SELECT * FROM stand WHERE id = $1", [id]);
    if (typeof stand.rows[0] === "undefined") {
      throw new Error("Stand does not exist");
    }
    res.status(200).json(stand.rows[0]);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteStand = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStand = await pool.query("DELETE FROM stand WHERE id = $1", [
      id,
    ]);
    res.status(200).json({ message: "Stand deleted" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateStand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, location, image } = req.body;
    const updatedStand = await pool.query(
      "UPDATE stand SET name = $1, description = $2, location = $3, image = $4 WHERE id = $5",
      [name, description, location, image, id]
    );
    res.status(200).json({ message: "Stand updated" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default { index, newStand, viewStand, deleteStand, updateStand };
