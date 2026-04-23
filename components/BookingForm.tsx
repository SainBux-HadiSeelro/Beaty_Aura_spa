"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  treatment: "Skin Rejuvenation Therapy",
  date: "",
  note: ""
};

export function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-[34px] p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm text-charcoal/70">
          Full name
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="mt-2 w-full rounded-[18px] border border-charcoal/8 bg-white/70 px-4 py-3 outline-none transition focus:border-sage/70"
          />
        </label>
        <label className="text-sm text-charcoal/70">
          Email address
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="mt-2 w-full rounded-[18px] border border-charcoal/8 bg-white/70 px-4 py-3 outline-none transition focus:border-sage/70"
          />
        </label>
        <label className="text-sm text-charcoal/70">
          Treatment
          <select
            value={form.treatment}
            onChange={(event) => setForm({ ...form, treatment: event.target.value })}
            className="mt-2 w-full rounded-[18px] border border-charcoal/8 bg-white/70 px-4 py-3 outline-none transition focus:border-sage/70"
          >
            <option>Skin Rejuvenation Therapy</option>
            <option>Laser Glow Treatment</option>
            <option>Natural Lift Therapy (HIFU)</option>
            <option>Contour Harmony Fillers</option>
          </select>
        </label>
        <label className="text-sm text-charcoal/70">
          Preferred date
          <input
            required
            type="date"
            value={form.date}
            onChange={(event) => setForm({ ...form, date: event.target.value })}
            className="mt-2 w-full rounded-[18px] border border-charcoal/8 bg-white/70 px-4 py-3 outline-none transition focus:border-sage/70"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm text-charcoal/70">
        Notes
        <textarea
          rows={5}
          value={form.note}
          onChange={(event) => setForm({ ...form, note: event.target.value })}
          className="mt-2 w-full rounded-[18px] border border-charcoal/8 bg-white/70 px-4 py-3 outline-none transition focus:border-sage/70"
          placeholder="Share how you would like to feel after your visit."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="button-primary">
          Reserve Consultation
        </button>
        {submitted ? (
          <p className="text-sm text-charcoal/65">
            Your request has been noted. A care advisor will follow up shortly.
          </p>
        ) : (
          <p className="text-sm text-charcoal/55">
            Consultation requests are reviewed within one business day.
          </p>
        )}
      </div>
    </form>
  );
}
