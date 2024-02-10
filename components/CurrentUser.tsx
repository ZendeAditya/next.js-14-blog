"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const CurrentUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const userId: string | undefined = user?.id;
  const fullName: string | null | undefined = user?.fullName;
  const email: string | undefined = user?.primaryEmailAddress?.emailAddress;
  const imageUrl: string | undefined = user?.imageUrl;
  const saveUser = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        userId,
        username: fullName,
        email,
        userImg: imageUrl,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log("user saved");
    }
  };
  useEffect(() => {
    if (isSignedIn && user) {
      saveUser();
    }
  });
  return <></>;
};

export default CurrentUser;
