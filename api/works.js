// api/works.js
import pool from "./db.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://boyidris.vercel.app"); // restrict to your frontend
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let page = parseInt(req.query.page) || 1;
    if (page === 0) return (page = 1);
    const limit = 12;
    const offset = (page - 1) * limit;

    const total = await pool.query("SELECT COUNT(*) FROM posts");

    const posts = await pool.query(
      "SELECT * FROM posts ORDER BY created_at DESC LIMIT $1 OFFSET $2",
      [limit, offset]
    );

    if (total) {
      if (Math.ceil(total.rowCount / limit) < page) {
        res.json({
          message:
            "Hey champ, I have not done just enough work,thank you for believing in me though",
        });
      } else {
        res.json({
          data: posts.rows,
          pagination: {
            total: parseInt(total.rows[0].count),
            page,
            limit,
            totalPages: Math.ceil(total.rows[0].count / limit),
          },
        });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch works" });
  }
}
