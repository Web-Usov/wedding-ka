interface IconProps {
  className?: string;
}

export function FireworkIcon({ className = '' }: IconProps) {
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
      <path d="M24 28V14" />
      <path d="M24 14l-4-6" />
      <path d="M24 14l4-6" />
      <path d="M24 14l-7-3" />
      <path d="M24 14l7-3" />
      <path d="M24 14l-8 2" />
      <path d="M24 14l8 2" />
      <path d="M18 28l-4 4" />
      <path d="M30 28l4 4" />
      <path d="M24 32l-2 6" />
      <path d="M24 32l2 6" />
      <circle cx="24" cy="28" r="3" />
    </svg>
  );
}
