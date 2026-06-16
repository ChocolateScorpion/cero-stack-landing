export default function Hero() {
  return (
    <section className="hero-grid-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.07)] text-gold text-sm font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          Automatización para pequeños negocios en México
        </span>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-white">Cero Stack</span>{" "}
          <span className="text-gold">Studio</span>
        </h1>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
          Automatizamos tu negocio con tecnología a tu medida
        </p>

        {/* Divider line */}
        <div className="w-16 h-px bg-gold opacity-50" />

        {/* Sub-copy */}
        <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
          Construimos herramientas digitales personalizadas: apps de cobro,
          agendas inteligentes y bots de WhatsApp que hacen crecer tu negocio
          mientras tú te enfocas en atender a tus clientes.
        </p>

        {/* CTA */}
        <a
          href="#contacto"
          className="mt-2 inline-flex items-center gap-3 bg-gold text-[#090909] font-bold px-8 py-4 rounded-full text-lg transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-lg"
          style={{ boxShadow: "0 4px 32px rgba(201,168,76,0.3)" }}
        >
          Quiero mi demo personalizada
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>

        {/* Social proof */}
        <p className="text-xs text-gray-600 mt-2">
          Sin compromisos · Demo 100% personalizada para tu giro
        </p>
      </div>
    </section>
  );
}
