import { Link } from "react-router";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "AI Agents - About" },
    { name: "description", content: "Learn about AI Agents Chat application" },
  ];
}

export default function Home() {
  return (
    <div>
      <Welcome />
      <div className="fixed bottom-8 right-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Back to Chat</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.414L3 21l2.414-5.094A8.959 8.959 0 73 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
            />
          </svg>
          Back to Chat
        </Link>
      </div>
    </div>
  );
}
