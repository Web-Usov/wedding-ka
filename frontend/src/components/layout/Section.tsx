import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen w-full flex flex-col items-center justify-center px-6 py-16 ${className}`}
    >
      {children}
    </section>
  );
}
