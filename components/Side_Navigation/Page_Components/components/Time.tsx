// "use client"; directive should be inside the useEffect hook
import { cn } from "@/lib/cn";
import React, { useState, useEffect, useRef } from "react";

export const Time = ({ className }: { className: string }) => {
  // Corrected ref declaration
  const timeRef = useRef<number | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Place "use client" within the useEffect hook
    "use client";

    const updateTime = () => {
      const now = new Date();
      // Set time zone to Asia/Manila for Philippine time
      now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Manila",
        hour12: true,
      });
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour12: true,
        minute: "2-digit",
        hour: "2-digit",
      });
      setCurrentTime(formattedTime);

      // Only assign a new requestAnimationFrame if the previous one is valid
      if (timeRef.current) {
        timeRef.current = requestAnimationFrame(updateTime);
      } else {
        timeRef.current = requestAnimationFrame(updateTime); // Ensure initial execution
      }
    };

    updateTime(); // Call updateTime directly

    return () => {
      // Only cancelAnimationFrame if the stored value is a valid number
      if (typeof timeRef.current === "number") {
        cancelAnimationFrame(timeRef.current);
      }
    };
  }, []);

  return <p className={cn(className)}>{currentTime}</p>;
};

export default Time;
