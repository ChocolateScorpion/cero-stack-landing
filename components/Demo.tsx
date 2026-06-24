"use client";

import { useEffect, useRef } from "react";

export default function Demo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demo" ref={sectionRef} className="bg-dark-section py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span className="text-[#5C6FFF] text-xs font-semibold uppercase tracking-widest">
            Demo en Vivo
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Ve cómo funciona<br className="hidden md:block" /> antes de comprometerte.
          </h2>
          <p className="mt-5 text-[#707070] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Esta es la app que construimos para un spa & bronceado en México.
            Cada demo está personalizada con el nombre, colores y flujos de{" "}
            <span className="text-white font-medium">tu negocio específico</span>.
          </p>
        </div>

        {/* Browser mockup */}
        <div className="fade-up fade-delay-1 rounded-2xl border border-[#1A1A1A] overflow-hidden shadow-2xl indigo-glow max-w-5xl mx-auto">
          {/* Browser bar */}
          <div className="bg-[#111] border-b border-[#1A1A1A] px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 bg-[#0D0D0D] border border-[#1A1A1A] rounded-md px-3 py-1.5 flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="text-xs text-[#505050] font-mono truncate">spa-bronze-mex-demo.vercel.app</span>
            </div>
          </div>

          {/* iFrame */}
          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
            <iframe
              src="https://spa-bronze-mex-demo.vercel.app"
              title="Demo Spa & Bronze México"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        </div>

        {/* Trust signals */}
        <div className="fade-up fade-delay-2 mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#505050]">
          {[
            "Demo real, no maqueta",
            "Personalizada con tu marca y colores",
            "Lista en 48 horas tras contacto",
          ].map((label, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[rgba(92,111,255,0.10)] border border-[rgba(92,111,255,0.20)] flex items-center justify-center flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#5C6FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              {label}
            </span>
          ))}
        </div>

        <div className="mt-6 text-center fade-up fade-delay-3">
          <a
            href="https://spa-bronze-mex-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5C6FFF] text-sm hover:underline"
          >
            Abrir demo en nueva pestaña →
          </a>
        </div>
      </div>
    </section>
  );
}
