import { useState } from 'react';
import { ScrollReveal } from '../components/layout/ScrollReveal';
import { content, GOOGLE_SCRIPT_URL } from '../data/content';

interface FormData {
  name: string;
  phone: string;
  allergy: string;
  plusOne: string;
  vegetarian: string;
  attendance: string;
  drinks: string[];
}

const initialForm: FormData = {
  name: '',
  phone: '',
  allergy: '',
  plusOne: '',
  vegetarian: content.rsvp.form.vegetarianOptions[0],
  attendance: content.rsvp.form.attendanceOptions[0],
  drinks: [],
};

export function Rsvp() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Пожалуйста, укажите имя';
    if (!form.phone.trim()) newErrors.phone = 'Пожалуйста, укажите телефон';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitError('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Ошибка отправки. Попробуйте ещё раз.');
      }
    } catch {
      setSubmitError('Ошибка сети. Проверьте подключение.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleDrink = (drink: string) => {
    const current = form.drinks;
    if (current.includes(drink)) {
      handleChange('drinks', current.filter((d) => d !== drink));
    } else {
      handleChange('drinks', [...current, drink]);
    }
  };

  return (
    <section
      id="rsvp"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&q=80)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm md:max-w-lg">
        <ScrollReveal className="text-center mb-8">
          <h2 className="font-sans text-xl md:text-2xl font-light text-white mb-2">
            {content.rsvp.title}
          </h2>
          <p className="font-sans text-sm font-light text-white/80">
            {content.rsvp.dateInfo}
          </p>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="bg-white/95 rounded-2xl p-8 text-center">
              <p className="font-sans text-lg text-dark">
                {content.rsvp.form.successMessage}
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder={content.rsvp.form.namePlaceholder}
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white font-sans text-sm text-dark placeholder:text-medium-gray outline-none transition-colors ${
                    errors.name ? 'ring-2 ring-red-400' : 'focus:ring-2 focus:ring-dark/20'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder={content.rsvp.form.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white font-sans text-sm text-dark placeholder:text-medium-gray outline-none transition-colors ${
                    errors.phone ? 'ring-2 ring-red-400' : 'focus:ring-2 focus:ring-dark/20'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>
                )}
              </div>

              {/* Allergy */}
              <input
                type="text"
                placeholder={content.rsvp.form.allergyPlaceholder}
                value={form.allergy}
                onChange={(e) => handleChange('allergy', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white font-sans text-sm text-dark placeholder:text-medium-gray outline-none focus:ring-2 focus:ring-dark/20"
              />

              {/* Plus One */}
              <input
                type="text"
                placeholder={content.rsvp.form.plusOnePlaceholder}
                value={form.plusOne}
                onChange={(e) => handleChange('plusOne', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white font-sans text-sm text-dark placeholder:text-medium-gray outline-none focus:ring-2 focus:ring-dark/20"
              />

              {/* Vegetarian */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-sm text-white">
                  {content.rsvp.form.vegetarianLabel}
                </label>
                <select
                  value={form.vegetarian}
                  onChange={(e) => handleChange('vegetarian', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white font-sans text-sm text-dark outline-none focus:ring-2 focus:ring-dark/20"
                >
                  {content.rsvp.form.vegetarianOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-sm text-white">
                  {content.rsvp.form.attendanceLabel}
                </label>
                <select
                  value={form.attendance}
                  onChange={(e) => handleChange('attendance', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white font-sans text-sm text-dark outline-none focus:ring-2 focus:ring-dark/20"
                >
                  {content.rsvp.form.attendanceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Drinks */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-sm text-white">
                  {content.rsvp.form.drinksLabel}
                </label>
                <div className="flex flex-col gap-2">
                  {content.rsvp.form.drinksOptions.map((drink) => (
                    <label
                      key={drink}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                          form.drinks.includes(drink)
                            ? 'bg-white border-white'
                            : 'border-white/60'
                        }`}
                        onClick={() => toggleDrink(drink)}
                      >
                        {form.drinks.includes(drink) && (
                          <svg
                            className="w-3 h-3 text-dark"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="font-sans text-sm text-white">{drink}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-white font-sans text-sm font-medium text-dark tracking-wider hover:bg-white/90 transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Отправка...' : content.rsvp.form.submitButton}
              </button>

              {submitError && (
                <p className="text-red-400 text-sm text-center">{submitError}</p>
              )}
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
