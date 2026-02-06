"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyEmailButton({ email }) {
  const [label, setLabel] = useState("Copy");
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
    } catch {
      setLabel("Failed");
    }

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setLabel("Copy"), 1500);
  };

  return (
    <button type="button" onClick={handleCopy} className="pill-button">
      {label}
    </button>
  );
}
