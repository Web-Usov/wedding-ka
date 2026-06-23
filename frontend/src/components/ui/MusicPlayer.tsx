import { useRef, useState, useEffect } from 'react';
import { content } from '../../data/content';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !content.music.audioUrl) return;

    if (!hasInteracted) {
      setHasInteracted(true);
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {
        // Autoplay blocked or no source
      });
      setIsPlaying(true);
    }
  };

  // Don't render if no audio URL is set
  if (!content.music.audioUrl) {
    return null;
  }

  return (
    <>
      <audio ref={audioRef} src={content.music.audioUrl} loop preload="none" />
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-dark/80 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:bg-dark transition-colors"
        aria-label={isPlaying ? 'Остановить музыку' : 'Включить музыку'}
        title={content.music.title}
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
