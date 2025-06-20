import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  eventDate: timestamp("event_date"),
  eventType: varchar("event_type", { length: 100 }),
  message: varchar("message", { length: 1000 }),
});
