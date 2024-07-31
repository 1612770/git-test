import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const data = await request.formData();
  console.log("🚀 ~ POST ~ key:", data, process.env.VERCEL_GIT_COMMIT_SHA);
  const key = data.get("key");
  if (key === process.env.VERCEL_GIT_COMMIT_SHA) {
    const response = NextResponse.redirect(
      "https://git-test-rouge.vercel.app:3000",
      {
        status: 302,
      }
    );

    response.cookies.set("x-deployment-secure-key", key, {
      path: "/",
      httpOnly: true,
      // 10 seconds
      maxAge: 10,
    });

    return response;
  } else {
    throw new Error("Invalid key");
  }
}
