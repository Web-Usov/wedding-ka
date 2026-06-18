interface IconProps {
  className?: string;
}

export function GiftIcon({ className = '' }: IconProps) {
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
      <rect x="6" y="20" width="36" height="22" rx="2" />
      <path d="M6 26h36" />
      <path d="M24 20v22" />
      <path d="M24 20c0-6 4-10 8-10s4 4 0 6-8 4-8 4z" />
      <path d="M24 20c0-6-4-10-8-10s-4 4 0 6 8 4 8 4z" />
    </svg>
  );
}
