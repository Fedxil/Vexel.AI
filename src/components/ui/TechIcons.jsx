const TECH_ICON_MAP = {
  React: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path
        d="M9 15.5V8.5l7.5 9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 8.5v4.5" strokeLinecap="round" />
    </svg>
  ),
  Vue: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 4h4.2L12 14l5.8-10H22L12 21 2 4Z" />
      <path d="M6.2 4h3.5L12 8l2.3-4h3.5L12 14 6.2 4Z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6ZM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z" />
    </svg>
  ),
  "Node.js": (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5 20.5 7.4v9.2L12 21.5 3.5 16.6V7.4L12 2.5Z" />
      <path d="M12 12v9.5M12 12l8.5-4.6M12 12 3.5 7.4" strokeOpacity="0.45" />
    </svg>
  ),
  Laravel: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5.5 8 3.5l4 2v7l4-2 4 2v5l-8 4-8-4v-12Z" />
      <path d="M4 5.5 8 7.5l4-2M8 7.5v7l4 2 4-2M12 12.5l4 2 4-2" />
    </svg>
  ),
  PostgreSQL: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 13.5C5 12 4.5 9.5 5.5 7c1-2.5 3.8-4 6.5-4s5.5 1.5 6.5 4c1 2.5.4 5.2-1.2 6.8" />
      <path d="M9 10.5c0 3.5.5 8.5 3 8.5 1.6 0 2.2-1.5 2.2-3.2V12" />
      <path d="M15.5 13.5c1.5 0 3-.8 3-2.5" />
      <circle cx="9.5" cy="8.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="8.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  Flutter: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.3 2 4 12.3l3.2 3.2L20.7 2h-6.4Zm0 9.5-5.6 5.6 5.6 5.6h6.4l-5.6-5.6 5.6-5.6h-6.4Z" />
    </svg>
  ),
  "React Native": (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <rect x="6" y="2.5" width="12" height="19" rx="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="4.5" ry="2" />
      <ellipse cx="12" cy="12" rx="4.5" ry="2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="4.5" ry="2" transform="rotate(120 12 12)" />
    </svg>
  ),
  Kotlin: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 3h18l-9 9 9 9H3V3Z" />
    </svg>
  ),
  SwiftUI: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path
        d="M16.5 15.5c-2.2 1.2-5.4.8-8-1.5 1.8.3 3.4-.1 4.2-.8-1.8-1.1-3.3-2.9-4.1-4.8 1.5 1.2 3.3 2.2 4.8 2.6-.5-1.3-.6-2.7-.2-3.9 1.6 1.7 3.2 4.2 3.3 6.6.7.5 1.2 1.1 1.3 1.8-.4-.1-.9-.1-1.3 0Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  GitHub: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),
  GitLab: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 21.4 4.1-12.7H7.9L12 21.4Zm0 0L7.9 8.7H2.2L12 21.4Zm-9.8-12.7-1.7 5.3c-.2.5 0 1.1.5 1.4L12 21.4 2.2 8.7Zm5.7 0L5.5 2.6c-.2-.6-1-.6-1.2 0L2.2 8.7h5.7Zm4.1 12.7 4.1-12.7h5.7L12 21.4Zm9.8-12.7 1.7 5.3c.2.5 0 1.1-.5 1.4L12 21.4l9.8-12.7Zm-5.7 0 2.4-6.1c.2-.6 1-.6 1.2 0l2.1 6.1h-5.7Z" />
    </svg>
  ),
};

export function TechLogo({ name }) {
  return (
    <span className="inline-flex items-center justify-center text-signal shrink-0">
      {TECH_ICON_MAP[name] || <span className="w-2 h-2 bg-signal" />}
    </span>
  );
}

export function IdeLogo({ label }) {
  if (label.startsWith("Visual Studio Code")) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 3 21 5v14l-4 2-9-8-4 3-2-1.5 5.5-4.5L2 5.5 4 4l4 3 9-4Z" />
      </svg>
    );
  }
  if (label.startsWith("Android Studio")) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M12 3 5 21M12 3l7 18M7 15h10M12 2v3" />
      </svg>
    );
  }
  if (label.startsWith("JetBrains")) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" />
        <line x1="7" y1="17" x2="14" y2="17" strokeWidth="2.2" />
      </svg>
    );
  }
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
      <polyline points="3.3 7 12 12 20.7 7" />
      <line x1="12" y1="22" x2="12" y2="12" />
    </svg>
  );
}
