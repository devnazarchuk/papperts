'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

const companyInfo = {
  Company: 'papperts GmbH',
  Address: 'Am Forsthaus 21, 36163 Poppenhausen',
  Phone: '+49 (0)66 58 96 01 0',
  Email: 'service@papperts.de',
};

function InfoBlock() {
  return (
    <div className="rounded-lg bg-white shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-2">Contact Information</h2>
      <ul className="text-gray-700 space-y-1">
        <li><span className="font-semibold">Company:</span> {companyInfo.Company}</li>
        <li><span className="font-semibold">Address:</span> {companyInfo.Address}</li>
        <li><span className="font-semibold">Phone:</span> {companyInfo.Phone}</li>
        <li><span className="font-semibold">Email:</span> {companyInfo.Email}</li>
      </ul>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ Name: '', Email: '', Subject: '', Message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return submitted ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-green-100 rounded-lg text-green-800 text-center"
    >
      Thanks for your message! We&apos;ll get back to you soon.
    </motion.div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Contact Form</h2>
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          name="Name"
          value={form.Name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          name="Email"
          type="email"
          value={form.Email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Subject</label>
        <input
          name="Subject"
          value={form.Subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="Message"
          value={form.Message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="container mx-auto py-12 px-4 max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-4xl font-extrabold text-center text-blue-900"
      >
        Contact
      </motion.h1>
      <InfoBlock />
      <ContactForm />
    </main>
  );
} 