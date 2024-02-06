"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const CurrentUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user);
  const saveUser = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ isLoaded, isSignedIn, user }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log("user saved");
    }
  };
  return <></>;
};

export default CurrentUser;
