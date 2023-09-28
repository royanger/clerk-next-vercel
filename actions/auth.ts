"use server";

import { currentUser } from "@clerk/nextjs";

// We are using Prisma to create/retrieve the user.
// I've commented out the Prisma code.
export const FAKE_USER = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

export async function getUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  return FAKE_USER;

  // return await prisma.user.findUnique({
  //   where: { clerkUserId: clerkUser.id },
  // });
}

export async function createUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) throw Error(`Unauthorized`);

  return FAKE_USER;

  // return await prisma.user.create({
  //   data: {
  //     clerkUserId: clerkUser.id,
  //     email: clerkUser.emailAddresses[0].emailAddress,
  //     firstName: clerkUser.firstName,
  //     lastName: clerkUser.lastName,
  //     profilePicture: clerkUser.profileImageUrl,
  //   },
  // });
}
