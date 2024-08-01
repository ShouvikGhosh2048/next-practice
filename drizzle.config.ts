
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './app/db/schema.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.POSTGRES_URL!,
    },
});