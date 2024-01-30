/**
 * An array of routes that are accessible to the public
 * These route do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These route will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = ["/"];

/**
 * The prefix for Api authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
