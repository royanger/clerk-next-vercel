import { getUser } from "@/actions/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getUser();

    if (!user) {
      return new NextResponse("Lambda 401", { status: 401 });
    }

    return new NextResponse("Lambda 200", { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Lambda 500", { status: 500 });
  }
}
