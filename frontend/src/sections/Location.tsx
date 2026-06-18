import { ScrollReveal } from '../components/layout/ScrollReveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { content } from '../data/content';

export function Location() {
  return (
    <section
      id="location"
      className="w-full flex flex-col items-center justify-center bg-light-gray px-6 py-16 md:py-24"
    >
      <div className="max-w-md md:max-w-4xl w-full flex flex-col items-center text-center">
        <ScrollReveal>
          <SectionTitle>{content.location.title}</SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-sans text-lg md:text-xl font-light text-dark mb-2">
            {content.location.venue}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-sans text-sm md:text-base font-light text-dark-gray mb-8">
            {content.location.address}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="w-full">
          <a
            href={content.location.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={content.location.mapImage}
              alt="Карта проезда"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </a>
          <p className="font-sans text-xs text-medium-gray mt-3">
            Нажмите на карту, чтобы построить маршрут
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
