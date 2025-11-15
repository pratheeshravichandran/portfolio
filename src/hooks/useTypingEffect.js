import { useState, useEffect } from 'react';

export const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setTypedText(currentText.slice(0, charIndex + 1));
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentText.slice(0, charIndex - 1));
        charIndex--;
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        isDeleting = false;
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typeInterval);
  }, [currentIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return typedText;
};
