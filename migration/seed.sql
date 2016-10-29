-- CREATE TABLE guests (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255),
--   email VARCHAR(255) UNIQUE,
--   has_attended BOOLEAN
-- );
--
-- CREATE TABLE events (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255),
--   location VARCHAR(255)
-- );

INSERT INTO guests (name, email, has_attended) VALUES ('Josh Whitney', 'Josh@poop.com', 'false');
INSERT INTO events (name, location) VALUES ('Joshapooloza', 'NYC');
