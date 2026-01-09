'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // This is where you'll POST to your AWS Lambda endpoint
    try {
      const res = await fetch('https://gjm94caqyb.execute-api.us-east-1.amazonaws.com/htrcFormHandling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error('Something went wrong');

      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' }); // reset form
    } catch (err) {
      console.error(err);
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-zinc-900 text-center">
      <div className="bg-htrcGrey max-w-xl mx-auto p-10 rounded-3xl border-[1px] border-black">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-zinc-300 mb-6">Send us a message or inquiry.</p>
        <form className="max-w-lg mx-auto space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-htrcWhite text-htrcGrey placeholder-zinc-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-htrcWhite text-htrcGrey placeholder-zinc-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded bg-htrcWhite text-htrcGrey placeholder-zinc-400"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <div>
            <button
              type="submit"
              className="bg-htrcWhite mt-5 mb-5 text-htrcGrey font-semibold px-6 py-3 rounded hover:bg-htrcOrange transition duration-300 transform hover:-translate-y-[0.5px]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
