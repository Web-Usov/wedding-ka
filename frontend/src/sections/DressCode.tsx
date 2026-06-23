import { ScrollReveal } from '../components/layout/ScrollReveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { content } from '../data/content';

const pairs = [
  {
    male: { src: '/assets/images/male-1.png', alt: 'Мужской образ 1' },
    female: { src: '/assets/images/female-1.png', alt: 'Женский образ 1' },
  },
  {
    male: { src: '/assets/images/male-2.png', alt: 'Мужской образ 2' },
    female: { src: '/assets/images/female-2.png', alt: 'Женский образ 2' },
  },
  {
    male: { src: '/assets/images/male-3.png', alt: 'Мужской образ 3' },
    female: { src: '/assets/images/female-3.png', alt: 'Женский образ 3' },
  },
  {
    male: { src: '/assets/images/male-4.png', alt: 'Мужской образ 4' },
    female: { src: '/assets/images/female-4.png', alt: 'Женский образ 4' },
  },
  {
    male: { src: '/assets/images/male-5.png', alt: 'Мужской образ 5' },
    female: { src: '/assets/images/female-5.png', alt: 'Женский образ 5' },
  },
];

export function DressCode() {
  return (
    <section
      id="dress-code"
      className="w-full flex flex-col items-center justify-center bg-white px-6 py-16 md:py-24"
    >
      <div className="max-w-md md:max-w-4xl w-full flex flex-col items-center text-center">
        <ScrollReveal>
          <SectionTitle>{content.dressCode.title}</SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-sans text-sm md:text-base font-light text-dark-gray leading-relaxed mb-10">
            {content.dressCode.text}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex gap-3 md:gap-4 mb-12">
            {content.dressCode.colors.map((color) => (
              <div key={color.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full"
                  style={{ backgroundColor: color.value }}
                />
                <span className="font-sans text-xs text-medium-gray">{color.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col gap-4 md:gap-6 w-full max-w-sm mx-auto">
            {pairs.map((pair, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 md:gap-6"
              >
                <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-md">
                  <img
                    src={pair.male.src}
                    alt={pair.male.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-md">
                  <img
                    src={pair.female.src}
                    alt={pair.female.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
