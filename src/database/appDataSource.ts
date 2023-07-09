import { DataSource } from "typeorm";

export const MySQLDataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: ["./src/entities/*.ts"],
  migrations: ["./migrations/*.ts"],
});

MySQLDataSource.initialize().catch((error) => {
  console.error('Database error: ', error);
});