import { ScrollReveal } from '../components/layout/ScrollReveal';
import { useCountdown } from '../hooks/useCountdown';
import { content, WEDDING_DATE } from '../data/content';

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-sans text-4xl md:text-5xl font-light tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-sans text-xs md:text-sm tracking-wider text-medium-gray mt-2 uppercase">
        {label}
      </span>
    </div>
  );
}

export function Invitation() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_DATE);

  return (
    <section
      id="invitation"
      className="w-full flex flex-col items-center justify-center bg-white px-6 py-16 md:py-24"
    >
      <div className="max-w-md md:max-w-4xl w-full flex flex-col items-center text-center">
        <ScrollReveal>
          <h2 className="font-sans text-2xl md:text-3xl font-light text-dark mb-8">
            {content.invitation.title}
          </h2>
        </ScrollReveal>

        {content.invitation.paragraphs.map((paragraph, index) => (
          <ScrollReveal key={index} delay={0.1 * (index + 1)}>
            <p className="font-sans text-sm md:text-base font-light text-dark-gray leading-relaxed mb-4">
              {paragraph}
            </p>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.3}>
          <p className="font-sans text-sm md:text-base font-light text-dark-gray mt-6 mb-8">
            {content.invitation.timerLabel}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          {isExpired ? (
            <p className="font-script text-4xl text-dark">Сегодня!</p>
          ) : (
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              <CountdownUnit value={days} label="Дней" />
              <CountdownUnit value={hours} label="Часов" />
              <CountdownUnit value={minutes} label="Минут" />
              <CountdownUnit value={seconds} label="Секунд" />
            </div>
          )}
        </ScrollReveal>

      </div>
    </section>
  );
}
