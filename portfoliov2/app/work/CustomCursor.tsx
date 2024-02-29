"use client";

import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Add custom cursor class to body when component mounts
    document.body.classList.add("custom-cursor-enabled");

    // Remove custom cursor class from body when component unmounts
    return () => {
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return null; // CustomCursor component doesn't render anything
};

export default CustomCursor;
