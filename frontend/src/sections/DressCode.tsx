import { ScrollReveal } from '../components/layout/ScrollReveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { content } from '../data/content';

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
          <div className="flex gap-4 md:gap-6 mb-12">
            {content.dressCode.colors.map((color) => (
              <div key={color.name} className="flex flex-col items-center gap-2">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${color.border ? 'border border-gray-300' : ''}`}
                  style={{ backgroundColor: color.value }}
                />
                <span className="font-sans text-xs text-medium-gray">{color.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="relative flex justify-center items-center w-full max-w-xs">
            {/* Left photo (male) */}
            <div className="w-36 h-52 md:w-44 md:h-64 rounded-3xl overflow-hidden shadow-lg transform -translate-x-4 translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80"
                alt="Мужской образ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Right photo (female) */}
            <div className="w-36 h-52 md:w-44 md:h-64 rounded-3xl overflow-hidden shadow-lg transform translate-x-4 -translate-y-2 z-10">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
                alt="Женский образ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
