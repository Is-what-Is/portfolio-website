import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/HomePage.tsx"),
  route("projects/:slug", "pages/ProjectPage.tsx"),
  route("*", "pages/NotFoundPage.tsx"),
] satisfies RouteConfig;
