import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/chat.tsx"),
  route("logs", "routes/logs.tsx"),
] satisfies RouteConfig;
