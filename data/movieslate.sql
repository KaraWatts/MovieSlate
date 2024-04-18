-- DROP TABLE IF EXISTS users;
-- -- Create Department Table
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     user_name VARCHAR(20) UNIQUE NOT NULL,
--     email VARCHAR(50) UNIQUE NOT NULL,
--     );

DROP TABLE IF EXISTS ranked
CREATE TABLE ranked(
    id SERIAL PRIMARY KEY,
    movie_title VARCHAR(255) UNIQUE NOT NULL,
    poster VARCHAR(255) UNIQUE,
    release_year INT NOT NULL,
    description TEXT() NOT NULL,
    banner VARCHAR(255),
    
)