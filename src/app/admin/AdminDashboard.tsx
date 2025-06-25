"use client";

import { useEffect, useState, useRef } from "react";
import { getAllBookings, deleteBooking } from "@/lib/bookingActions";
import { format } from "date-fns";
import { saveAs } from "file-saver";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Booking {
  id: number;
  name: string;
  email: string;
  event_date: string;
  event_type: string;
  message?: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllBookings();
      setBookings(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    const matchesDate =
      !filterDate || new Date(booking.event_date).toDateString() === filterDate.toDateString();
    const matchesSearch =
      booking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !filterType || booking.event_type === filterType;
    return matchesDate && matchesSearch && matchesType;
  });

  const handleExportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Name,Email,Date,Type,Message"].concat(
        filteredBookings.map((b) =>
          [
            b.name,
            b.email,
            format(new Date(b.event_date), "yyyy-MM-dd"),
            b.event_type,
            b.message || ""
          ].join(",")
        )
      ).join("\n");

    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, "bookings.csv");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-yellow-400 text-center">Admin Dashboard</h1>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Search by Name or Email</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search bookings..."
            className="w-full p-3 rounded-lg bg-zinc-900 border border-yellow-500/30 text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Filter by Event Date</label>
          <DatePicker
            selected={filterDate}
            onChange={(date: Date | null) => setFilterDate(date)}
            placeholderText="Click to select date"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-yellow-500/30 text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            calendarClassName="bg-black text-yellow-300"
            dateFormat="yyyy-MM-dd"
            isClearable
            customInput={<input ref={dateInputRef} />}
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm font-medium">Filter by Event Type</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 text-yellow-200 focus:outline-none"
          >
            <option value="">All Types</option>
            <option value="Wedding">💍 Wedding</option>
            <option value="Birthday">🎂 Birthday</option>
            <option value="Corporate">🏢 Corporate</option>
            <option value="Club">🎧 Club</option>
            <option value="Other">🎭 Other</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleExportCSV}
        className="mb-6 bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold transition"
      >
        Export Filtered to CSV
      </button>

      {loading ? (
        <p className="text-center text-yellow-300">Loading bookings...</p>
      ) : filteredBookings.length === 0 ? (
        <p className="text-center text-red-400">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="p-4 border border-yellow-500/30 rounded-lg bg-yellow-50/5 hover:shadow-xl transition"
            >
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Date:</strong> {new Date(booking.event_date).toDateString()}</p>
              <p><strong>Type:</strong> {booking.event_type}</p>
              {booking.message && <p><strong>Message:</strong> {booking.message}</p>}
              <button
                onClick={async () => {
                  await deleteBooking(booking.id);
                  setBookings(bookings.filter((b) => b.id !== booking.id));
                }}
                className="mt-2 text-red-500 hover:text-red-300 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
