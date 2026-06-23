import { ScrollReveal } from '../components/layout/ScrollReveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { content } from '../data/content';

export function Timing() {
  return (
    <section
      id="timing"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(/assets/images/timing-bg.jpg)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md md:max-w-4xl">
        <ScrollReveal className="text-center mb-16">
          <SectionTitle light>{content.timing.title}</SectionTitle>
        </ScrollReveal>

        <div className="flex flex-col gap-10 md:gap-14">
          {content.timing.events.map((event, index) => (
            <ScrollReveal
              key={event.time}
              delay={0.15 * (index + 1)}
              className={`flex flex-col ${
                event.offset === 'right' ? 'items-end pr-4 md:pr-8' : 'items-start pl-4 md:pl-8'
              }`}
            >
              <div className="relative">
                {/* Large semi-transparent background digits */}
                <span
                  className="absolute -top-6 left-0 font-sans text-6xl md:text-7xl font-light text-white/15 select-none"
                  aria-hidden="true"
                >
                  {event.time}
                </span>
                {/* Crisp white digits */}
                <span className="relative font-sans text-2xl md:text-3xl font-light text-white">
                  {event.time}
                </span>
              </div>
              <span className="font-sans text-xs md:text-sm tracking-widest text-white/90 mt-2">
                {event.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
