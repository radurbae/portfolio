"use client";

import { useState } from "react";

const DEFAULT_VALUES = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: ""
};

function buildMailto(contactEmail, values) {
  const subject = `Project Inquiry from ${values.name || "Website Visitor"}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Project type: ${values.projectType}`,
    `Budget range: ${values.budget}`,
    `Timeline: ${values.timeline}`,
    "",
    "Project brief:",
    values.message
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function InquiryForm({ contactEmail }) {
  const [values, setValues] = useState(DEFAULT_VALUES);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setStatus("Please fill Name, Email, and Project Brief.");
      return;
    }

    const mailtoUrl = buildMailto(contactEmail, values);
    window.location.href = mailtoUrl;
    setStatus("Opening your email app...");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="form-input"
            placeholder="you@email.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div>
          <label htmlFor="projectType" className="form-label">
            Project Type
          </label>
          <input
            id="projectType"
            name="projectType"
            type="text"
            value={values.projectType}
            onChange={handleChange}
            className="form-input"
            placeholder="Website / App / Software"
          />
        </div>
        <div>
          <label htmlFor="budget" className="form-label">
            Budget
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={values.budget}
            onChange={handleChange}
            className="form-input"
            placeholder="$3k - $10k"
          />
        </div>
        <div>
          <label htmlFor="timeline" className="form-label">
            Timeline
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            value={values.timeline}
            onChange={handleChange}
            className="form-input"
            placeholder="4 - 8 weeks"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Project Brief
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          className="form-input min-h-[130px]"
          placeholder="What are you trying to build, for who, and what outcome matters most?"
          required
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button type="submit" className="primary-button motion-press">
          Send Inquiry
        </button>
        <button type="button" className="pill-button motion-press" onClick={() => setValues(DEFAULT_VALUES)}>
          Reset
        </button>
      </div>

      {status ? <p className="text-xs text-[#4c4c4c]">{status}</p> : null}
    </form>
  );
}
