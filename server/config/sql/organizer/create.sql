INSERT INTO organizers (name, email) VALUES ($1, $2) RETURNING *;
