import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js", // Make sure this path is correct
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL, // Use env variable
  },
});