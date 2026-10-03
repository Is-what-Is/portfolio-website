import { useEffect, useState } from "react";

// Cadence, in milliseconds.
const TYPE_MS = 70;
const TYPE_JITTER_MS = 40;
const DELETE_MS = 35;
const HOLD_MS = 1600;
const GAP_MS = 400;

/**
 * Types and deletes each phrase in turn, forever.
 * Starts with the first phrase fully typed so prerendered HTML is not empty.
 */
export function useTypewriter(phrases: readonly string[], enabled: boolean) {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (!enabled) return;

    let index = 0;
    let length = phrases[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = phrases[index];
      if (deleting) {
        if (length > 0) {
          length -= 1;
          setText(phrase.slice(0, length));
          timer = setTimeout(tick, DELETE_MS);
        } else {
          deleting = false;
          index = (index + 1) % phrases.length;
          timer = setTimeout(tick, GAP_MS);
        }
      } else if (length < phrase.length) {
        length += 1;
        setText(phrase.slice(0, length));
        timer = setTimeout(tick, TYPE_MS + Math.random() * TYPE_JITTER_MS);
      } else {
        deleting = true;
        timer = setTimeout(tick, HOLD_MS);
      }
    };

    timer = setTimeout(tick, HOLD_MS);
    return () => clearTimeout(timer);
  }, [phrases, enabled]);

  return text;
}
