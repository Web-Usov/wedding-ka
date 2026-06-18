interface SectionTitleProps {
  children: string;
  className?: string;
  light?: boolean;
}

export function SectionTitle({ children, className = '', light = false }: SectionTitleProps) {
  return (
    <h2
      className={`font-script text-5xl md:text-6xl mb-8 ${light ? 'text-white' : 'text-dark'} ${className}`}
    >
      {children}
    </h2>
  );
}
