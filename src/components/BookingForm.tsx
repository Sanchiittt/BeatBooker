// components/BookingForm.tsx

// "use client";

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Image from "next/image";
// import { addBooking } from "../lib/bookingActions"

// // 🧠 Zod schema
// const BookingSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   email: z.string().email("Invalid email"),
//   eventDate: z.date({ required_error: "Event date is required" }),
//   eventType: z.enum(["Wedding", "Birthday", "Corporate", "Club", "Other"], {
//     errorMap: () => ({ message: "Please select an event type" }),
//   }),
//   message: z.string().optional(),
// });

// type BookingFormData = z.infer<typeof BookingSchema>;

// const BookingForm: React.FC = () => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<BookingFormData>({
//     resolver: zodResolver(BookingSchema),
//   });

//   const onSubmit = (data: BookingFormData) => {
//     console.log("Booking submitted:", data);
//     alert("🎉 Booking Submitted!");
//   };

//   return (
//     <section
//       id="booking"
//       className="py-16 px-6 md:px-12 text-white bg-gradient-to-br from-black/90 via-yellow-900/10 to-black"
//     >
//       <div className="max-w-2xl mx-auto border border-yellow-500/20 bg-black/60 rounded-2xl shadow-xl p-8 backdrop-blur-md">
//         {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-6">
//           Book DJ Goldbeard 🎧 
//         </h2> */}


// <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-6 flex items-center justify-center gap-3">
//   Book DJ Goldbeard 🎧
//   <Image
//     src="/assets/bookingpimg.jpg"
//     alt="logo"
//     width={80}
//     height={80}
//     className="rounded-full object-cover ring-2 ring-yellow-400"
//   />
// </h2>


//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Name */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Name</label>
//             <input
//               {...register("name")}
//               placeholder="Your full name"
//               className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//             {errors.name && (
//               <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Email</label>
//             <input
//               type="email"
//               {...register("email")}
//               placeholder="you@example.com"
//               className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//             {errors.email && (
//               <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Event Date with DatePicker */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Event Date</label>
//             <Controller
//               control={control}
//               name="eventDate"
//               render={({ field }) => (
//                 <DatePicker
//                   placeholderText="Select event date"
//                   selected={field.value}
//                   onChange={(date) => field.onChange(date)}
//                   className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   calendarClassName="bg-black text-yellow-300"
//                   dateFormat="yyyy-MM-dd"
//                 />
//               )}
//             />
//             {errors.eventDate && (
//               <p className="text-red-400 text-sm mt-1">{errors.eventDate.message}</p>
//             )}
//           </div>

//           {/* Event Type */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Event Type</label>
//             <select
//               {...register("eventType")}
//               className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             >
//               <option value="">Select event type</option>
//               <option value="Wedding">Wedding</option>
//               <option value="Birthday">Birthday</option>
//               <option value="Corporate">Corporate</option>
//               <option value="Club">Club</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.eventType && (
//               <p className="text-red-400 text-sm mt-1">{errors.eventType.message}</p>
//             )}
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">
//               Message (optional)
//             </label>
//             <textarea
//               {...register("message")}
//               placeholder="Tell us about your event..."
//               rows={4}
//               className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-semibold text-lg transition"
//           >
//             Submit Booking
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default BookingForm;





// "use client";

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { addBooking } from "../lib/bookingActions";


// // Schema
// const BookingSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   email: z.string().email("Invalid email"),
//   eventDate: z.date({ required_error: "Event date is required" }),
//   eventType: z.enum(["Wedding", "Birthday", "Corporate", "Club", "Other"], {
//     errorMap: () => ({ message: "Please select an event type" }),
//   }),
//   message: z.string().optional(),
// });

// type BookingFormData = z.infer<typeof BookingSchema>;

// const BookingForm: React.FC = () => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<BookingFormData>({
//     resolver: zodResolver(BookingSchema),
//   });

//   const onSubmit = async (data: BookingFormData) => {
//     console.log("Booking submitted:", data);
//     alert("🎉 Booking Submitted!");
//   };

//   return (
//     <section
//       id="booking"
//       className="relative py-20 px-6 md:px-12 text-white bg-black overflow-hidden"
//     >
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/assets/bookingpimg.jpg"
//           alt="Booking Background"
//           fill
//           className="object-cover opacity-20"
//         />
//       </div>

//       <div className="relative z-10 max-w-2xl mx-auto rounded-2xl border border-yellow-500/30 bg-black/40 backdrop-blur-md p-8 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-2"
//         >
//           Book DJ Goldbeard 🎧
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="flex justify-center mb-6"
//         >
//           <Image
//             src="/assets/bookingpimg.jpg"
//             alt="logo"
//             width={100}
//             height={100}
//             className="rounded-full shadow-md"
//           />
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="text-center text-yellow-100 text-sm md:text-base mb-8"
//         >
//           Secure Your Party Spot 🎶 <br />
//           Fill in the booking form below to get DJ Goldbeard grooving at your event.
//         </motion.p>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Name */}
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
//             <label className="block mb-1 text-sm font-medium">Name</label>
//             <input
//               {...register("name")}
//               placeholder="Your full name"
//               className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//             {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
//           </motion.div>

//           {/* Email */}
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
//             <label className="block mb-1 text-sm font-medium">Email</label>
//             <input
//               type="email"
//               {...register("email")}
//               placeholder="you@example.com"
//               className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//             {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
//           </motion.div>

//           {/* Event Date */}
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
//             <label className="block mb-1 text-sm font-medium">Event Date</label>
//             <Controller
//               control={control}
//               name="eventDate"
//               render={({ field }) => (
//                 <DatePicker
//                   placeholderText="Select event date"
//                   selected={field.value}
//                   onChange={(date) => field.onChange(date)}
//                   className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   calendarClassName="bg-black text-yellow-300"
//                   dateFormat="yyyy-MM-dd"
//                   highlightDates={[new Date()]}
//                   dayClassName={(date) =>
//                     date.toDateString() === new Date().toDateString()
//                       ? "text-yellow-300 font-bold"
//                       : ""
//                   }
//                 />
//               )}
//             />
//             {errors.eventDate && (
//               <p className="text-red-400 text-sm mt-1">{errors.eventDate.message}</p>
//             )}
//           </motion.div>

//           {/* Event Type */}
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
//             <label className="block mb-1 text-sm font-medium">Event Type</label>
//             <select
//               {...register("eventType")}
//               className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             >
//               <option value="">Select event type</option>
//               <option value="Wedding">💍 Wedding</option>
//               <option value="Birthday">🎂 Birthday</option>
//               <option value="Corporate">🏢 Corporate</option>
//               <option value="Club">🎧 Club</option>
//               <option value="Other">🎭 Other</option>
//             </select>
//             {errors.eventType && (
//               <p className="text-red-400 text-sm mt-1">{errors.eventType.message}</p>
//             )}
//           </motion.div>

//           {/* Message */}
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
//             <label className="block mb-1 text-sm font-medium">Message (optional)</label>
//             <textarea
//               {...register("message")}
//               placeholder="Tell us about your event..."
//               rows={4}
//               className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           </motion.div>

//           {/* Submit */}
//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-semibold text-lg transition"
//           >
//             Submit Booking
//           </motion.button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default BookingForm;








"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { addBooking } from "../lib/bookingActions"; // <- backend function

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
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(BookingSchema),
  });

  // const onSubmit = async (data: BookingFormData) => {
  //   try {
  //     await addBooking(data);
  //     alert("🎉 Booking saved!");
  //     reset(); // Optional: clear form after submit
  //   } catch (error) {
  //     console.error("Failed to save booking:", error);
  //     alert("❌ Booking failed. Please try again.");
  //   }
  // };

  
  
  
//   const onSubmit = async (data: BookingFormData) => {
//   try {
//     console.log("Sending to server:", data);
//     await addBooking({
//       ...data,
//       eventDate: new Date(data.eventDate), // ensure it's proper Date
//     });
//     alert("🎉 Booking saved!");
//   } catch (error) {
//     console.error("🔥 INSERT FAILED:", error);
//     alert("❌ Booking failed.");
//   }
// };





// BookingForm.tsx
const onSubmit = async (data: BookingFormData) => {
  try {
    console.log('Form data before submission:', data);
    await addBooking({
      ...data,
      eventDate: data.eventDate // Ensure this is a Date object
    });
    alert("🎉 Booking saved successfully!");
    reset();
  } catch (error) {
    console.error('Form submission error:', error);
    alert(`❌ Booking failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
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
          <Image
            src="/assets/bookingpimg.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full shadow-md"
          />
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
            {errors.eventDate && (
              <p className="text-red-400 text-sm mt-1">{errors.eventDate.message}</p>
            )}
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
            {errors.eventType && (
              <p className="text-red-400 text-sm mt-1">{errors.eventType.message}</p>
            )}
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

