"use client";

import { getUser } from "@/actions/auth";
import { useEffect, useState } from "react";

export function ClientComponent() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  return (
    <section>
      <h2>Client Component</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </section>
  );
}
