interface IconProps {
  className?: string;
}

export function MicrophoneIcon({ className = '' }: IconProps) {
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
      <path d="M24 28c4 0 7-3 7-7V12c0-4-3-7-7-7s-7 3-7 7v9c0 4 3 7 7 7z" />
      <path d="M12 22v3c0 6.6 5.4 12 12 12s12-5.4 12-12v-3" />
      <path d="M24 37v6" />
      <path d="M18 43h12" />
    </svg>
  );
}
