"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
      </svg>
    ),
    title: "OCR de Comprobantes",
    description: "La app lee automáticamente las transferencias y pagos de los clientes, eliminando la captura manual y los errores humanos.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Comisiones Automáticas",
    description: "Calcula y distribuye comisiones por artista en tiempo real. Cero discusiones, cero cálculos manuales al cerrar la semana.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    ),
    title: "Reportes Mensuales",
    description: "Dashboard con ingresos por artista, servicios más populares y comparativa mensual. Toma decisiones con datos reales.",
  },
];

const STATS = [
  { target: 0, suffix: "", label: "Errores de cobro", prefix: "" },
  { target: 4, suffix: "h", label: "Admin por semana", prefix: "−" },
  { target: 100, suffix: "%", label: "Confianza del equipo", prefix: "" },
];

function useCountUp(target: number, isVisible: boolean, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}

function StatItem({ stat, isVisible }: { stat: typeof STATS[0]; isVisible: boolean }) {
  const count = useCountUp(stat.target, isVisible);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-xs text-[#505050] mt-1.5 leading-tight">{stat.label}</div>
    </div>
  );
}

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="caso" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 fade-up">
          <span className="text-[#5C6FFF] text-xs font-semibold uppercase tracking-widest">
            Caso de Éxito
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Lúcida App —<br className="hidden sm:block" /> Estudio de Tatuajes
          </h2>
          <p className="mt-5 text-[#707070] max-w-xl text-base md:text-lg leading-relaxed">
            Un estudio de tatuajes nos pidió orden en sus cobros y comisiones.
            Entregamos una app completa que transformó su operación diaria.
          </p>
        </div>

        {/* Main card */}
        <div
          className="fade-up fade-delay-1 rounded-3xl border border-[#1A1A1A] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(92,111,255,0.04) 0%, #0C0C0C 50%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: story */}
            <div className="p-10 lg:p-14 flex flex-col justify-center gap-8 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]">
              {/* Label */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[rgba(92,111,255,0.10)] border border-[rgba(92,111,255,0.20)] flex items-center justify-center text-[#5C6FFF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span className="text-[#5C6FFF] font-semibold text-sm">Problema resuelto</span>
              </div>

              {/* Testimonial */}
              <blockquote className="text-[#C0C0C0] text-lg leading-relaxed italic border-l-2 border-[#5C6FFF] pl-5">
                &ldquo;Antes perdíamos horas revisando transferencias en WhatsApp y
                calculando comisiones a mano. Ahora todo está automatizado y
                mis artistas confían 100% en los números.&rdquo;
              </blockquote>

              <p className="text-[#404040] text-sm font-medium">
                — Propietario, Estudio Lúcida
              </p>

              {/* Stats con contador animado */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#141414]">
                {STATS.map((stat) => (
                  <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
                ))}
              </div>
            </div>

            {/* Right: features */}
            <div className="p-10 lg:p-14 flex flex-col gap-8">
              <h3 className="text-white font-bold text-lg tracking-tight">Lo que construimos</h3>
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(92,111,255,0.08)] border border-[rgba(92,111,255,0.15)] flex items-center justify-center text-[#5C6FFF] flex-shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1.5 text-sm">{f.title}</h4>
                    <p className="text-[#707070] text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
