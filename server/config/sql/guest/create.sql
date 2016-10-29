INSERT INTO guests (name, email) VALUES ($1, $2) RETURNING *;
