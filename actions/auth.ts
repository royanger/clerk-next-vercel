"use server";

import { prisma } from "@/libs/prisma";
import { currentUser } from "@clerk/nextjs";

// We are using Prisma to create/retrieve the user.
// I've commented out the Prisma code.
// const FAKE_USER = {
//   id: 1,
//   name: "John",
//   email: "john@example.com",
// };

export async function getUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;


  const res = await prisma.user.findUnique({
    where: { id: clerkUser.id },
  });

  console.log('GET USER', res)

  return res
}

export async function createUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) throw Error(`Unauthorized`);

  // return FAKE_USER;

  const res = await prisma.user.create({
    data: {
      id: clerkUser.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      firstName: clerkUser.firstName!,
      lastName: clerkUser.lastName!,
      profileImage: clerkUser.profileImageUrl,
    },
  });
  console.log('CREATE USER', res)
  return res
}
