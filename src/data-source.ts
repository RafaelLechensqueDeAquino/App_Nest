import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'senha123',
  database: 'gestao',
  entities: [User],
  synchronize: false,
  migrations: ['./src/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_history',
  migrationsRun: true,
  ssl: false,
});
