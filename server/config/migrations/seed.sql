DROP DATABASE IF EXISTS event_management_app;
CREATE DATABASE event_management_app;

\c event_management_app

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  location VARCHAR NOT NULL
);

CREATE TABLE guests (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  event_id INTEGER REFERENCES events (id)

);

CREATE TABLE organizers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  event_id INTEGER REFERENCES events (id)
);
