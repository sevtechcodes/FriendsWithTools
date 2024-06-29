//The clerkMiddleware helper enables authentication and is where you'll configure your protected routes
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware()

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

//TODO: clerkMiddleware will not protect any routes. All routes are public and you must opt-in to protection for routes.