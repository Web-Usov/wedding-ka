import { ScrollReveal } from '../components/layout/ScrollReveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { RoseIcon } from '../components/icons/RoseIcon';
import { GiftIcon } from '../components/icons/GiftIcon';
import { HandsIcon } from '../components/icons/HandsIcon';
import { FireworkIcon } from '../components/icons/FireworkIcon';
import { MicrophoneIcon } from '../components/icons/MicrophoneIcon';
import { content } from '../data/content';

const iconMap = {
  rose: RoseIcon,
  gift: GiftIcon,
  hands: HandsIcon,
  firework: FireworkIcon,
  microphone: MicrophoneIcon,
};

export function Details() {
  return (
    <section
      id="details"
      className="w-full flex flex-col items-center justify-center bg-light-gray px-6 py-16 md:py-24"
    >
      <div className="max-w-md md:max-w-4xl w-full">
        <ScrollReveal className="text-center mb-12">
          <SectionTitle>{content.details.title}</SectionTitle>
        </ScrollReveal>

        <div className="flex flex-col gap-10">
          {content.details.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={item.heading} delay={0.1 * (index + 1)}>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <IconComponent className="w-8 h-8 text-dark" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs md:text-sm font-medium tracking-widest text-dark mb-2">
                      {item.heading}
                    </h3>
                    <p className="font-sans text-sm md:text-base font-light text-dark-gray leading-relaxed">
                      {item.text}
                    </p>
                    {'contact' in item && item.contact && (
                      <p className="font-sans text-sm font-light text-dark-gray mt-2">
                        {item.contact}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
