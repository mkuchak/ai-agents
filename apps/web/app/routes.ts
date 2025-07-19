import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/chat.tsx"),
  route("/home", "routes/home.tsx"),
] satisfies RouteConfig;
