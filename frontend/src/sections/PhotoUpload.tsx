import { useState } from 'react';
import { ScrollReveal } from '../components/layout/ScrollReveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { content, PHOTO_UPLOAD_URL } from '../data/content';

export function PhotoUpload() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(PHOTO_UPLOAD_URL);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = PHOTO_UPLOAD_URL;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silently ignore
    }
  };

  return (
    <section
      id="photo-upload"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-6 py-16 md:py-24"
    >
      <div className="max-w-md md:max-w-4xl w-full flex flex-col items-center text-center">
        <ScrollReveal>
          <SectionTitle>{content.photoUpload.title}</SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-sans text-sm md:text-base font-light text-dark-gray leading-relaxed mb-10 max-w-sm">
            {content.photoUpload.text}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-light-gray rounded-2xl p-6 md:p-8 flex flex-col items-center gap-6">
            <img
              src="/assets/image-upload-qr.png"
              alt="QR-код для загрузки фото"
              className="w-48 h-48 object-contain"
            />
            <div className="flex flex-col items-center gap-3">
              <a
                href={PHOTO_UPLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-dark text-white font-sans text-sm tracking-wider hover:bg-dark/90 transition-colors"
              >
                {content.photoUpload.buttonText}
              </a>
              <button
                onClick={handleCopy}
                className="font-sans text-xs text-medium-gray hover:text-dark transition-colors"
              >
                {copied ? 'Ссылка скопирована!' : 'Скопировать ссылку'}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
