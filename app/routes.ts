import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("login", "routes/login.tsx"),
  route("carCollection", "routes/carCollection.tsx"),
] satisfies RouteConfig;
