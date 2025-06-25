// import { defineConfig } from "drizzle-kit";
// import * as dotenv from "dotenv";

// dotenv.config();

// export default defineConfig({
//   schema: "./src/db/schema.ts",
//   out: "./drizzle",
//   driver: "pg", // ✅ This is valid for PostgreSQL
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// });


// drizzle.config.ts
// import * as dotenv from "dotenv";
// import { defineConfig } from "drizzle-kit";

// dotenv.config();

// export default defineConfig({
//   schema: "./src/db/schema.ts",
//   out: "./drizzle",
//   driver: "pg" as const, // <-- Force correct type
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// });




// import { defineConfig } from "drizzle-kit";
// import * as dotenv from "dotenv";

// dotenv.config();

// export default defineConfig({
//   schema: "./src/db/schema.ts",
//   out: "./drizzle",
//   dialect: "postgresql",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// });



// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   schema: "./src/db/schema.ts",         // path to your schema
//   out: "./drizzle",                     // where SQL files go
//   dialect: "postgresql",                // required in v0.21+
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!, // from your Supabase project
//   },
// });




import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: "db.ivxxrqhusyxvzmwnstae.supabase.co",
    port: 5432,
    user: "postgres",
    password: "DJGoldbeard@30",
    database: "postgres",
    ssl: "require", // important for Supabase
  },
});





// import { defineConfig } from "drizzle-kit";
// import * as dotenv from "dotenv";

// dotenv.config();

// export default defineConfig({
//   schema: "./src/db/schema.ts",
//   out: "./drizzle",
//   dialect: "postgresql",
//   dbCredentials: {
//     host: process.env.DATABASE_HOST!,
//     port: Number(process.env.DATABASE_PORT!),
//     user: process.env.DATABASE_USER!,
//     password: process.env.DATABASE_PASSWORD!,
//     database: process.env.DATABASE_NAME!,
//     ssl: "require",
//   },
// });









