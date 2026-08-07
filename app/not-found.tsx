import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="px-6 lg:px-10 pt-40 pb-32 max-w-[860px] mx-auto text-center">
      <div className="eyebrow mb-6">Cut to black</div>
      <h1 className="hero-title text-[16vw] md:text-[8rem] mb-8">404</h1>
      <p className="text-lg text-white/60 max-w-lg mx-auto mb-10">
        This frame does not exist, or has been cut from the final edit.
      </p>
      <Link href="/" className="btn-primary inline-flex">
        Back to the journal <span className="arrow">→</span>
      </Link>
    </section>
  );
}
