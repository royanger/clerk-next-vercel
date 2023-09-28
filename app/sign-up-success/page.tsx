"use client";

import { createUser, getUser } from "@/actions/auth";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const clerk = useUser();

  useEffect(() => {
    // Waiting for Clerk to load
    if (!clerk.isLoaded) return;
    if (!clerk.isSignedIn) return;

    // Clerk is loaded, checking if user exists
    (async () => {
      try {
        const user = await getUser();

        // User doesn't exist, creating
        if (!user) await createUser();
      } catch (error) {
        console.error(error);
      } finally {
        router.push("/");
      }
    })();
  }, [clerk.isLoaded, clerk.isSignedIn]);

  return <p>Signing you in...</p>;
}
