"use client";

import { useEffect, useMemo, useState } from "react";

export default function LiveClock({ timeZone = "Asia/Jakarta" }) {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone
      }),
    [timeZone]
  );

  const [timeValue, setTimeValue] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeValue(formatter.format(new Date()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [formatter]);

  return <span>{timeValue}</span>;
}
