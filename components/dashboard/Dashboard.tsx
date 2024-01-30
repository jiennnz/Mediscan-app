"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <button onClick={logout}>LOGOUT</button>
    </section>
  );
};

export default Dashboard;
