import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
});

export const query = (text: string, params: string[] | number[]) =>
  pool.query(text, params);
