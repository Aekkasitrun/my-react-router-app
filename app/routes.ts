// app/routes.ts
import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  // --- Unprotected Route ---
  // The login page remains accessible without authentication
  route("login", "routes/login.tsx"),
    index("routes/home.tsx"), // Your home page (now protected)

  // --- Protected Layout/Group of Routes ---
  // This 'layout' wraps all its children with the ProtectedRoute component.
  // The string "components/ProtectedRoute.tsx" refers to the path to your ProtectedRoute component.
  // IMPORTANT: Ensure ProtectedRoute.tsx is in app/components/ and exports a default component.
  layout("components/ProtectedRoute.tsx", [
    // --- Protected Children Routes ---
    // These routes will only be accessible if ProtectedRoute allows them (i.e., user is authenticated)
    route("about", "routes/about.tsx"), // About page (now protected)
    route("contact", "routes/contact.tsx"), // Contact page (now protected)
    route("carCollection", "routes/carCollection.tsx"), // Car Collection page (now protected)
    // Add any other routes that should be protected here
  ])
] satisfies RouteConfig;