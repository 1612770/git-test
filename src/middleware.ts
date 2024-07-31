import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const xDeploymentSecureKey = cookies().get("x-deployment-secure-key");
  console.log("middle", xDeploymentSecureKey?.value);

  if (xDeploymentSecureKey?.value !== process.env.VERCEL_GIT_COMMIT_SHA) {
    return NextResponse.redirect("https://git-test-rouge.vercel.app/protect");
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|api|protect|sitemap.xml|robots.txt|favicon.ico|images/app-icon/manifest.json|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
