"use client"
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.location.href = "/web-build/index.html";
  }, []);

  return <></>;
};

export default page;
