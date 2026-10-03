import { Link } from "react-router";
import { Container } from "../components/layout/Container";

export default function NotFoundPage() {
  return (
    <Container className="pt-16 pb-24 sm:pt-22">
      <h1 className="text-[clamp(2rem,5vw,3.75rem)] leading-none font-extrabold tracking-[-0.02em] uppercase">
        Page Not Found
      </h1>
      <p className="mt-6 max-w-prose text-ink-muted">
        That address does not match a page on this site.
      </p>
      <Link to="/" className="label-caps mt-8 inline-block py-2.5 hover:text-accent">
        Back to the Homepage
      </Link>
    </Container>
  );
}
