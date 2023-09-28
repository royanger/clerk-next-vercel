import { getUser } from "@/actions/auth";

export async function ServerComponent() {
  const user = await getUser();

  return (
    <section>
      <h2>Server Component</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </section>
  );
}
