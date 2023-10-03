"use client";

import Lottie from "lottie-react";
import MaintenanceAnimation from "@/assets/gif/maintenance.json";

export default function Maintenance() {
  const options = {
    animationData: MaintenanceAnimation,
    loop: true,
    style: {
      width: "500px",
    },
  };
  return <Lottie {...options} />;
}
