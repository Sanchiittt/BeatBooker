"use server";
import { db } from "@/db"; // we'll create this next
//import { db } from "../db/index"
import { bookings } from "@/db/schema";

export const addBooking = async (data: {
  name: string;
  email: string;
  eventDate: Date;
  eventType: string;
  message?: string;
}) => {
  await db.insert(bookings).values(data);
};
