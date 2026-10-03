import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";
import { useTypewriter } from "../../lib/useTypewriter";
import { Container } from "../layout/Container";

const SEPARATOR = " · ";

const PHRASES = [
  "Is-what-Is",
  "Hypothesise · Discover · Design",
  "Test · Tune · Improve",
  "Deploy · Observe · Act",
] as const;

// Shown instead of the loop when the visitor prefers reduced motion.
const STATIC_PHRASES = PHRASES.slice(1);

const heroType =
  "font-mono text-[clamp(1.75rem,4.2vw,3.5rem)] leading-[1.2] font-bold text-accent";

export function TypingHero() {
  const reducedMotion = usePrefersReducedMotion();
  const text = useTypewriter(PHRASES, !reducedMotion);
  const segments = text.split(SEPARATOR);

  return (
    <section aria-label="Working method">
      <Container className="pt-16 pb-14 sm:pt-22 sm:pb-18">
        <p className="sr-only">
          Is-what-Is. Hypothesise, Discover, Design. Test, Tune, Improve.
          Deploy, Observe, Act.
        </p>

        {/* Animated loop. Height is reserved so nothing below moves:
            three stacked lines on narrow screens, one line from sm up. */}
        <p
          aria-hidden="true"
          className={`${heroType} min-h-[3.6em] sm:min-h-[1.2em] motion-reduce:hidden`}
        >
          <span className="text-ink-faint">&gt; </span>
          {segments.map((segment, i) => (
            <span
              key={i}
              className={i === 0 ? undefined : "block pl-[2ch] sm:inline sm:pl-0"}
            >
              {i > 0 && <span className="hidden sm:inline">{SEPARATOR}</span>}
              {segment}
              {i === segments.length - 1 && (
                <span className="ml-[0.1em] inline-block h-[0.14em] w-[0.55em] animate-blink bg-accent" />
              )}
            </span>
          ))}
        </p>

        {/* Static version for prefers-reduced-motion. */}
        <ul
          aria-hidden="true"
          className={`${heroType} hidden list-none motion-reduce:block`}
        >
          {STATIC_PHRASES.map((phrase) => (
            <li key={phrase}>{phrase}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
