"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add("is-visible"), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-grid-bg relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Radial glow — indigo, esquina izquierda */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 15% 55%, rgba(92,111,255,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ——— Left: editorial ——— */}
          <div ref={leftRef} className="fade-up flex flex-col gap-8">
            {/* Badge — indigo */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(92,111,255,0.25)] bg-[rgba(92,111,255,0.07)] text-[#5C6FFF] text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C6FFF] animate-pulse" />
                Automatización a medida · México
              </span>
            </div>

            {/* Display title */}
            <h1 className="text-[clamp(3rem,8vw,5.25rem)] font-black tracking-tighter leading-[0.93] text-white">
              Tu negocio<br />
              <span className="text-gold">en piloto</span><br />
              automático.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#909090] leading-relaxed max-w-md">
              Construimos bots de WhatsApp, menús QR y herramientas digitales
              que operan mientras tú atiendes lo que importa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-gold text-[#080808] font-bold px-7 py-4 rounded-full text-base transition-all hover:brightness-110 hover:scale-[1.03] active:scale-95"
                style={{ boxShadow: "0 4px 28px rgba(201,168,76,0.28)" }}
              >
                Ver mi demo personalizada
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 border border-[#242424] text-[#707070] font-medium px-7 py-4 rounded-full text-base transition-all hover:border-[#3A3A3A] hover:text-white"
              >
                Ver demo en vivo
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-start gap-8 pt-4 border-t border-[#141414]">
              {[
                { value: "48h", label: "Entrega de demo" },
                { value: "100%", label: "A tu medida" },
                { value: "0", label: "Código genérico" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-black text-white tracking-tight">{item.value}</div>
                  <div className="text-xs text-[#505050] mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ——— Right: composición visual ——— */}
          <div className="hidden lg:block relative h-[480px]">
            {/* Chat card principal */}
            <div className="absolute right-0 top-10 w-72 rounded-2xl border border-[#1E1E1E] bg-[#0F0F0F] overflow-hidden shadow-2xl indigo-glow">
              {/* Header */}
              <div className="bg-[#141414] border-b border-[#1E1E1E] px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[rgba(92,111,255,0.12)] border border-[rgba(92,111,255,0.2)] flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-semibold">Bot Cero Stack</div>
                  <div className="text-[10px] text-[#505050]">Responde en segundos</div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-[#505050]">Activo</span>
                </div>
              </div>
              {/* Messages */}
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-end">
                  <div className="bg-[rgba(92,111,255,0.10)] border border-[rgba(92,111,255,0.15)] rounded-2xl rounded-tr-sm px-3 py-2 text-sm text-white max-w-[82%]">
                    ¿Tienen lugar para mañana a las 3pm?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#161616] border border-[#222] rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-[#C0C0C0] max-w-[82%]">
                    ✅ Sí tenemos disponibilidad. ¿Qué servicio?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[rgba(92,111,255,0.10)] border border-[rgba(92,111,255,0.15)] rounded-2xl rounded-tr-sm px-3 py-2 text-sm text-white max-w-[82%]">
                    Bronceado completo 🙌
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#161616] border border-[#222] rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-[#C0C0C0] max-w-[82%]">
                    Perfecto, te agendé mañana a las 3pm. ¡Te llega confirmación!
                  </div>
                </div>
              </div>
            </div>

            {/* Stat card flotante */}
            <div className="absolute left-0 bottom-20 w-52 rounded-2xl border border-[rgba(201,168,76,0.15)] bg-[#0F0F0F] p-5 shadow-xl">
              <div className="text-[10px] text-[#505050] uppercase tracking-widest mb-2">Esta semana</div>
              <div className="text-4xl font-black text-white tracking-tight">−4h</div>
              <div className="text-sm text-[#707070] mt-1">en administración</div>
              <div className="mt-4 flex items-end gap-1 h-8">
                {[35, 55, 42, 78, 50, 88, 65].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 5 ? "#C9A84C" : "rgba(201,168,76,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Badge flotante — esquina superior izquierda */}
            <div className="absolute left-10 top-4 rounded-xl border border-[#1E1E1E] bg-[#0F0F0F] px-3.5 py-2.5 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-[#909090] font-medium">Bot activo · 24/7</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
