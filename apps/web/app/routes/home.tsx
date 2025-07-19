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
      <div className="fixed right-8 bottom-8">
        <Link
          to="/"
          className="inline-flex transform items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
        >
          <svg
            className="h-5 w-5"
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
