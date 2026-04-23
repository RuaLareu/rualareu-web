import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { GOOGLE_REVIEWS } from "@/lib/constants";

// Real Google reviews — fetched manually from Google Business Profile
// TODO: replace with Google Places API (New) to auto-sync reviews
// Docs: https://developers.google.com/maps/documentation/places/web-service/place-details
const reviews = [
  {
    name: "Patricia Neto",
    initial: "P",
    badge: "Local Guide",
    text: "RUA | LAREU es una excelente opción para quienes buscan un servicio serio, confiable y de alta calidad en el ámbito jurídico-contable. Totalmente recomendable.",
  },
  {
    name: "Juan Cruz Pagliardini",
    initial: "J",
    badge: null,
    text: "Impecable servicio. Activaron, en un par de meses, un juicio que esperaba hace nueve años.",
  },
  {
    name: "Real Step Sport Group",
    initial: "R",
    badge: null,
    text: "Excelente estudio. Me asesoran permanentemente en todas sus áreas con mucha claridad y profesionalismo. Siempre con enorme predisposición para abordar cada tema y consulta. Sin dudas los recomiendo.",
  },
  {
    name: "Carina Luchini",
    initial: "C",
    badge: null,
    text: "Excelente trato y profesionalismo. No solo desde lo técnico, sino la comunicación constante con el cliente.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-[#FBBC04]" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <ScrollAnimation className="flex flex-col items-center text-center mb-14">
          {/* Google badge */}
          <a
            href={GOOGLE_REVIEWS.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-10 px-5 py-3 border border-primary/15 bg-background hover:border-primary/30 transition-colors group"
          >
            <GoogleLogo />
            <Stars />
            <span className="font-semibold text-sm text-text">
              {GOOGLE_REVIEWS.rating.toFixed(1)}
            </span>
            <span className="w-px h-4 bg-primary-light" />
            <span className="text-text-secondary text-sm">
              {GOOGLE_REVIEWS.reviewCount} opiniones en Google
            </span>
            <span className="text-accent text-xs group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <p className="font-sackers-light text-accent text-[10px] sm:text-xs tracking-[0.32em] mb-4">
            Opiniones
          </p>
          <h2 className="font-sackers-heavy text-primary text-3xl sm:text-4xl lg:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-12 h-px bg-accent mt-6" />
        </ScrollAnimation>

        {/* ── Review cards: 2 cols on tablet, 4 on desktop ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-11">
          {reviews.map((review, i) => (
            <ScrollAnimation key={review.name} delay={i * 80}>
              <article className="bg-background p-6 flex flex-col h-full">
                <Stars />
                <p className="text-text text-sm leading-relaxed flex-1 mt-4 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-primary/15">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-semibold">{review.initial}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-text text-xs font-medium leading-snug truncate">
                      {review.name}
                    </p>
                    {review.badge && (
                      <p className="text-text-secondary/60 text-[11px] mt-0.5">{review.badge}</p>
                    )}
                  </div>
                  <div className="ml-auto opacity-40 flex-shrink-0">
                    <GoogleLogo />
                  </div>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        {/* ── Link to all reviews ── */}
        <ScrollAnimation className="text-center">
          <a
            href={GOOGLE_REVIEWS.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            Ver las {GOOGLE_REVIEWS.reviewCount} opiniones en Google
            <span aria-hidden="true">→</span>
          </a>
        </ScrollAnimation>

      </div>
    </section>
  );
}
