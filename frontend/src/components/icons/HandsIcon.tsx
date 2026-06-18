interface IconProps {
  className?: string;
}

export function HandsIcon({ className = '' }: IconProps) {
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
      <path d="M18 38c-2-4-6-8-8-12s0-8 2-8 6 4 8 8" />
      <path d="M30 38c2-4 6-8 8-12s0-8-2-8-6 4-8 8" />
      <path d="M14 18c-2-2-2-5 0-6" />
      <path d="M34 18c2-2 2-5 0-6" />
      <path d="M20 22c0-2-1-3-2-3s-2 1-2 3" />
      <path d="M28 22c0-2 1-3 2-3s2 1 2 3" />
      <circle cx="24" cy="38" r="3" />
    </svg>
  );
}
