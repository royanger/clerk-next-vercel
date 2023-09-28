import { ClientComponent } from "@/components/client-component";
import { ServerComponent } from "@/components/server-component";
import { SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ServerComponent />
      <ClientComponent />

      <SignedOut>
        <Link href="/sign-up">Sign up</Link>
      </SignedOut>

      <SignedIn>
        <UserProfile />
      </SignedIn>
    </main>
  );
}
