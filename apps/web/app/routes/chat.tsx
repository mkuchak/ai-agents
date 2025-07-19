import { ChatInterface } from "../components/chat-interface";
import type { Route } from "./+types/chat";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "AI Agents Chat" },
    {
      name: "description",
      content:
        "Chat with specialized AI agents for calculations, weather, and general assistance",
    },
  ];
}

export default function Chat() {
  return <ChatInterface />;
}
