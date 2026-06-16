export default function Demo() {
  return (
    <section className="bg-dark-section py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Demo en Vivo
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Ve cómo funciona antes de comprometerte
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Esta es la app que construimos para un spa & bronceado en México.
            Cada demo que entregamos está personalizada con el nombre, colores
            y flujos de <strong className="text-white">tu negocio específico</strong>.
          </p>
        </div>

        {/* Browser chrome + iframe */}
        <div className="rounded-2xl border border-dark-border overflow-hidden shadow-2xl gold-glow max-w-5xl mx-auto">
          {/* Browser bar */}
          <div className="bg-[#161616] border-b border-dark-border px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 bg-[#0D0D0D] rounded-md px-3 py-1 text-xs text-gray-500 font-mono truncate">
              spa-bronze-mex-demo.vercel.app
            </div>
          </div>

          {/* iframe */}
          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
            <iframe
              src="https://spa-bronze-mex-demo.vercel.app"
              title="Demo Spa & Bronze México"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />

            {/* Fallback overlay — shown only if iframe blocked (CSS trick via text beneath) */}
          </div>
        </div>

        {/* Caption */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Demo real, no maqueta
          </span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Personalizada con tu marca y colores
          </span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Lista en 48 horas tras contacto
          </span>
        </div>

        {/* Link fallback */}
        <div className="mt-4 text-center">
          <a
            href="https://spa-bronze-mex-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-sm hover:underline"
          >
            Abrir demo en nueva pestaña →
          </a>
        </div>
      </div>
    </section>
  );
}
