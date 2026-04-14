// Typewriter.tsx
import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deleteDelay?: number;
  nextTextDelay?: number;
  showCursor?: boolean;
  className?: string;
  cursorChar?: string;
  loop?: boolean;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 100,
  deleteDelay = 1500,
  nextTextDelay = 500,
  showCursor = true,
  className = "",
  cursorChar = "|",
  loop = true,
  onComplete,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const typeNext = () => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(typeNext, typingSpeed);
        } else {
          // Finished typing current text
          setIsTypingComplete(true);
          onComplete?.();

          if (currentTextIndex === texts.length - 1 && !loop) {
            return; // Don't delete if it's the last text and loop is false
          }

          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            setIsTypingComplete(false);
            timeoutRef.current = setTimeout(typeNext, typingSpeed);
          }, deleteDelay);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
          timeoutRef.current = setTimeout(typeNext, typingSpeed);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => {
            if (prev + 1 >= texts.length) {
              return loop ? 0 : prev;
            }
            return prev + 1;
          });
          timeoutRef.current = setTimeout(typeNext, nextTextDelay);
        }
      }
    };

    timeoutRef.current = setTimeout(typeNext, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    displayText,
    isDeleting,
    isTypingComplete,
    currentTextIndex,
    texts,
    typingSpeed,
    deleteDelay,
    nextTextDelay,
    loop,
    onComplete,
  ]);

  // Blinking cursor animation
  const cursorOpacity = useMotionValue(1);

  useEffect(() => {
    if (!showCursor) return;

    const animation = animate(cursorOpacity, [1, 0], {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    });

    return () => animation.stop();
  }, [showCursor, cursorOpacity]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      {showCursor && (
        <motion.span
          className="ml-px inline-block w-0.5"
          style={{ opacity: cursorOpacity }}
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  );
};

export default Typewriter;
