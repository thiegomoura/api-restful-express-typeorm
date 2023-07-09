import { DataSource } from "typeorm";

export const MySQLDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "super@docker",
  database: "CONVERTME",
  synchronize: true,
  entities: ["./src/entities/*.ts"],
  migrations: ["./migrations/*.ts"],
});

MySQLDataSource.initialize().catch((error) => {
  console.error('Database error: ', error);
});