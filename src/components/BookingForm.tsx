// components/BookingForm.tsx

"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

// 🧠 Zod schema
const BookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  eventDate: z.date({ required_error: "Event date is required" }),
  eventType: z.enum(["Wedding", "Birthday", "Corporate", "Club", "Other"], {
    errorMap: () => ({ message: "Please select an event type" }),
  }),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof BookingSchema>;

const BookingForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(BookingSchema),
  });

  const onSubmit = (data: BookingFormData) => {
    console.log("Booking submitted:", data);
    alert("🎉 Booking Submitted!");
  };

  return (
    <section
      id="booking"
      className="py-16 px-6 md:px-12 text-white bg-gradient-to-br from-black/90 via-yellow-900/10 to-black"
    >
      <div className="max-w-2xl mx-auto border border-yellow-500/20 bg-black/60 rounded-2xl shadow-xl p-8 backdrop-blur-md">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-6">
          Book DJ Goldbeard 🎧 
        </h2> */}


<h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-6 flex items-center justify-center gap-3">
  Book DJ Goldbeard 🎧
  <Image
    src="/assets/bookingpimg.jpg"
    alt="logo"
    width={80}
    height={80}
    className="rounded-full object-cover ring-2 ring-yellow-400"
  />
</h2>


        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              {...register("name")}
              placeholder="Your full name"
              className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Event Date with DatePicker */}
          <div>
            <label className="block mb-1 text-sm font-medium">Event Date</label>
            <Controller
              control={control}
              name="eventDate"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select event date"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  calendarClassName="bg-black text-yellow-300"
                  dateFormat="yyyy-MM-dd"
                />
              )}
            />
            {errors.eventDate && (
              <p className="text-red-400 text-sm mt-1">{errors.eventDate.message}</p>
            )}
          </div>

          {/* Event Type */}
          <div>
            <label className="block mb-1 text-sm font-medium">Event Type</label>
            <select
              {...register("eventType")}
              className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select event type</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate</option>
              <option value="Club">Club</option>
              <option value="Other">Other</option>
            </select>
            {errors.eventType && (
              <p className="text-red-400 text-sm mt-1">{errors.eventType.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Message (optional)
            </label>
            <textarea
              {...register("message")}
              placeholder="Tell us about your event..."
              rows={4}
              className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-semibold text-lg transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
