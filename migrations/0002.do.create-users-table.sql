CREATE TABLE users (
    id SERIAL PRIMARY KEY,

    email VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR(255),
    is_toggled boolean DEFAULT true,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT NULL
);

CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();