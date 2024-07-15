import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Match all routes except those starting with _next or containing a file extension
    '/((?!.*\\..*|_next).*)', 
    // Include the root route and any routes in the api or trpc folders
    '/', 
    '/(api|trpc)(.*)'
  ],
};
