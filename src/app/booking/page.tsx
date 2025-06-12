
// "use client";

// import React from "react";
// import BookingForm from "../../components/BookingForm";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// const BookingPage = () => {
//   return (
//     <main
//       className="min-h-screen text-white font-sans scroll-smooth"
//       style={{
//         background: "linear-gradient(to bottom right, #0B0014, #000000)",
//       }}
//     >
//       <Navbar />

//       {/* Hero Section with Background Image */}
//       <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="/assets/bookingpimg.jpg"
//             alt="DJ Goldbeard booking"
//             className="w-full h-full object-cover object-center"
//           />
//           {/* Overlay for contrast */}
//           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 px-6 md:px-12">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-md mb-4">
//             Secure Your Party Spot 🎶
//           </h1>
//           <p className="text-lg md:text-xl text-yellow-100/90 max-w-2xl mx-auto">
//             Fill in the booking form below to get DJ Goldbeard grooving at your event.
//           </p>
//         </div>
//       </section>

//       {/* Booking Form Section */}
//       <div className="relative z-10 -mt-20 md:-mt-24 px-4 sm:px-6 lg:px-8">
//         <BookingForm />
//       </div>

//       <Footer />
//     </main>
//   );
// };

// export default BookingPage;





"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import Image from "next/image";

// Schema
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
      className="relative py-20 px-6 md:px-12 text-white bg-black overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bookingpimg.jpg"
          alt="Booking Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto rounded-2xl border border-yellow-500/30 bg-black/40 backdrop-blur-md p-8 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-2"
        >
          Book DJ Goldbeard 🎧
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-6"
        >
          <Image src="/assets/bookingpimg.jpg" alt="logo" width={100} height={100} className="rounded-full shadow-md" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-yellow-100 text-sm md:text-base mb-8"
        >
          Secure Your Party Spot 🎶 <br />
          Fill in the booking form below to get DJ Goldbeard grooving at your event.
        </motion.p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              {...register("name")}
              placeholder="Your full name"
              className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </motion.div>

          {/* Email */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </motion.div>

          {/* Event Date */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
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
                  highlightDates={[new Date()]}
                  dayClassName={(date) =>
                    date.toDateString() === new Date().toDateString()
                      ? "text-yellow-300 font-bold"
                      : ""
                  }
                />
              )}
            />
            {errors.eventDate && <p className="text-red-400 text-sm mt-1">{errors.eventDate.message}</p>}
          </motion.div>

          {/* Event Type */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <label className="block mb-1 text-sm font-medium">Event Type</label>
            <select
              {...register("eventType")}
              className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select event type</option>
              <option value="Wedding">💍 Wedding</option>
              <option value="Birthday">🎂 Birthday</option>
              <option value="Corporate">🏢 Corporate</option>
              <option value="Club">🎧 Club</option>
              <option value="Other">🎭 Other</option>
            </select>
            {errors.eventType && <p className="text-red-400 text-sm mt-1">{errors.eventType.message}</p>}
          </motion.div>

          {/* Message */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <label className="block mb-1 text-sm font-medium">Message (optional)</label>
            <textarea
              {...register("message")}
              placeholder="Tell us about your event..."
              rows={4}
              className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-semibold text-lg transition"
          >
            Submit Booking
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
