// "use server";
// import { db } from "@/db"; // we'll create this next
// //import { db } from "../db/index"
// import { bookings } from "@/db/schema";

// export const addBooking = async (data: {
//   name: string;
//   email: string;
//   eventDate: Date;
//   eventType: string;
//   message?: string;
// }) => {

//   console.log("📦 Booking Data to Insert:", data);
//  try {
//   console.log("✅ Booking Data: ", data);
//     await db.insert(bookings).values(data);
//   } catch (error) {
//     console.error("🔥 INSERT FAILED:", error);
//     throw error;
//   }
// };







// deepsee bookingActions.ts


import { supabase } from './supabaseClient';

interface BookingData {
  name: string;
  email: string;
  eventDate: Date;
  eventType: string;
  message?: string;
}

export async function addBooking(bookingData: BookingData) {
  try {
    console.log('Submitting booking data:', bookingData);
    
    const { data, error } = await supabase
      .from('bookings')
      .insert({
        name: bookingData.name,
        email: bookingData.email,
        event_date: bookingData.eventDate.toISOString(),
        event_type: bookingData.eventType,
        message: bookingData.message || null
      })
      .select();

    if (error) {
      console.error('Detailed Supabase error:', {
        message: error.message,
        code: error.code,
        details: error.details
      });
      throw new Error(error.message || 'Failed to save booking');
    }

    console.log('Booking successful:', data);
    return data;
  } catch (error) {
    console.error('Full error details:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'Failed to save booking'
    );
  }
}