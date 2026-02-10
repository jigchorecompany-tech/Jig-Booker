import "dotenv/config";
import path from "path";
import { parse } from "pg-connection-string";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL not set");
}

const parsed = parse(process.env.DATABASE_URL);

const config = {
    migrationDirectory: "./src/database/migrations",
    driver: "pg",
    host: parsed.host,
    port: Number(parsed.port) || 5432,
    database: parsed.database,
    username: parsed.user,
    password: parsed.password,
    schemaTable: "schemaversion",
};

export default config;
