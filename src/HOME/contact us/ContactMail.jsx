import React from 'react'
import { useState } from "react";
import { Send } from "lucide-react";



function ContactMail() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Booking request",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-slate-900/70 backdrop-blur-lg border border-slate-700 rounded-xl shadow-xl p-6">
        
        <h2 className="text-2xl font-semibold text-white mb-1">
          Send us a message
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          A question? A special request? Write to us!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Full name"
              name="fullName"
              placeholder="John Doe"
              value={form.fullName}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <Input
            label="Phone"
            name="phone"
            placeholder="+1 234 567 8900"
            value={form.phone}
            onChange={handleChange}
          />

          {/* Subject */}
          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Subject
            </label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option>Booking request</option>
              <option>General question</option>
              <option>Support</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Describe your request..."
              value={form.message}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-black text-sm font-medium py-2.5 rounded-lg transition-all duration-300"
          >
            <Send size={16} />
            Send message
          </button>

          <p className="text-[11px] text-slate-500 text-center">
            By submitting this form, you agree to our{" "}
            <span className="text-amber-500 cursor-pointer hover:underline">
              privacy policy
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs text-slate-400 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>
  );
}


export default ContactMail