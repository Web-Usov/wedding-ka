interface IconProps {
  className?: string;
}

export function RoseIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M24 42c0-6 4-12 4-18s-4-10-8-10-8 4-8 10 4 12 4 18" />
      <path d="M24 14c-4-4-8-2-8 2s2 6 6 4" />
      <path d="M24 14c4-4 8-2 8 2s-2 6-6 4" />
      <path d="M20 18c-2-2-5-1-5 2" />
      <path d="M28 18c2-2 5-1 5 2" />
      <path d="M24 14V8" />
      <path d="M24 8c-2-2-2-4 0-6" />
      <path d="M24 8c2-2 2-4 0-6" />
    </svg>
  );
}
