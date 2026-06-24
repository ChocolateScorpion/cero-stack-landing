"use client";

import { useEffect, useRef, useState } from "react";

const DEMOS = [
  {
    id: "spa",
    label: "Spa & Bronze México",
    description: "App de cobros, agenda y clientas para un spa de bronceado.",
    url: "https://spa-bronze-mex-demo.vercel.app",
    tag: "Spa / Bronceado",
  },
  {
    id: "lucida",
    label: "Lúcida App",
    description: "Sistema de comisiones, cobros y reportes para estudio de tatuajes.",
    url: "https://tattoo-studio.vercel.app/r/demo01",
    tag: "Tatuajes / Barbería",
  },
];

export default function Demo() {
  const [active, setActive] = useState("spa");
  const [loaded, setLoaded] = useState<Record<string, boolean>>({ spa: false, lucida: false });
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

  const activeDemo = DEMOS.find((d) => d.id === active)!;

  return (
    <section id="demo" ref={sectionRef} className="bg-dark-section py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="text-[#5C6FFF] text-xs font-semibold uppercase tracking-widest">
            Demos en Vivo
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Ve cómo funciona<br className="hidden md:block" /> antes de comprometerte.
          </h2>
          <p className="mt-5 text-[#707070] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Apps reales para negocios reales. Cada demo que entregamos está personalizada
            con el nombre, colores y flujos de{" "}
            <span className="text-white font-medium">tu negocio específico</span>.
          </p>
        </div>

        {/* Tabs */}
        <div className="fade-up fade-delay-1 flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl border border-[#1A1A1A] bg-[#0C0C0C] gap-1">
            {DEMOS.map((demo) => (
              <button
                key={demo.id}
                onClick={() => {
                  setActive(demo.id);
                  setLoaded((prev) => ({ ...prev, [demo.id]: true }));
                }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={
                  active === demo.id
                    ? {
                        background: "#161616",
                        color: "#F0F0F0",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                        border: "1px solid #2A2A2A",
                      }
                    : {
                        color: "#505050",
                        border: "1px solid transparent",
                      }
                }
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: active === demo.id ? "#5C6FFF" : "#333" }}
                />
                {demo.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo description */}
        <div className="fade-up fade-delay-2 text-center mb-6">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border"
            style={{
              color: "#5C6FFF",
              borderColor: "rgba(92,111,255,0.20)",
              background: "rgba(92,111,255,0.06)",
            }}
          >
            {activeDemo.tag}
          </span>
          <p className="mt-2 text-sm text-[#606060]">{activeDemo.description}</p>
        </div>

        {/* Browser mockup */}
        <div className="fade-up fade-delay-2 rounded-2xl border border-[#1A1A1A] overflow-hidden shadow-2xl indigo-glow max-w-5xl mx-auto">
          {/* Browser bar */}
          <div className="bg-[#111] border-b border-[#1A1A1A] px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 bg-[#0D0D0D] border border-[#1A1A1A] rounded-md px-3 py-1.5 flex items-center gap-2">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#404040" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
              <span className="text-xs text-[#505050] font-mono truncate">{activeDemo.url}</span>
            </div>
            <a
              href={activeDemo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-[#404040] hover:text-[#707070] transition-colors"
              title="Abrir en nueva pestaña"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>

          {/* iFrames — solo se montan cuando se activa el tab */}
          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
            {DEMOS.map((demo) => (
              <iframe
                key={demo.id}
                src={active === demo.id || loaded[demo.id] ? demo.url : undefined}
                title={demo.label}
                className="absolute inset-0 w-full h-full border-0 transition-opacity duration-300"
                style={{ opacity: active === demo.id ? 1 : 0, pointerEvents: active === demo.id ? "auto" : "none" }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            ))}
          </div>
        </div>

        {/* Trust signals */}
        <div className="fade-up fade-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#505050]">
          {[
            "Demos reales, no maquetas",
            "Personalizadas con tu marca",
            "Listas en 48 horas tras contacto",
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
      </div>
    </section>
  );
}
