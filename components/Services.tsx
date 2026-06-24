"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
        <path d="M12 15h.01" /><path d="M8 15h.01" /><path d="M16 15h.01" />
      </svg>
    ),
    title: "App de Registro y Cobros",
    description: "Registra ventas, genera tickets, acepta pagos y lleva un control claro de tu caja diaria desde tu celular. Sin complicaciones, sin papel.",
    features: ["Tickets digitales", "Control de caja", "Reportes de ventas"],
  },
  {
    number: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" />
      </svg>
    ),
    title: "Agenda y Clientes",
    description: "Gestiona citas, historial de clientes y recordatorios automáticos. Reduce los no-shows y da una experiencia profesional desde el primer contacto.",
    features: ["Citas en línea", "Recordatorios WhatsApp", "Historial de clientes"],
  },
  {
    number: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" />
      </svg>
    ),
    title: "Bot de WhatsApp",
    description: "Automatiza respuestas, agenda citas, confirma pagos y atiende a tus clientes 24/7 sin tener que estar pegado al teléfono.",
    features: ["Respuestas automáticas", "Confirmación de citas", "Atención 24/7"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    if (!els) return;
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
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="bg-dark-section py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 fade-up">
          <span className="text-[#5C6FFF] text-xs font-semibold uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Herramientas que trabajan<br className="hidden md:block" /> para ti.
          </h2>
          <p className="mt-5 text-[#707070] max-w-lg text-base md:text-lg leading-relaxed">
            Cada solución es construida específicamente para tu negocio y tu forma de trabajar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card-hover fade-up fade-delay-${i + 1} relative bg-dark-card border border-dark-border rounded-2xl p-8 flex flex-col gap-6 overflow-hidden`}
            >
              {/* Número decorativo de fondo */}
              <span
                className="absolute -top-3 -right-1 text-[5rem] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(92,111,255,0.04)" }}
              >
                {service.number}
              </span>

              {/* Icon — indigo */}
              <div className="w-12 h-12 rounded-xl bg-[rgba(92,111,255,0.08)] border border-[rgba(92,111,255,0.15)] flex items-center justify-center text-[#5C6FFF] flex-shrink-0">
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5 flex-1">
                <h3 className="text-lg font-bold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="text-[#707070] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2 pt-4 border-t border-[#141414]">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#909090]">
                    <span className="w-4 h-4 rounded-full bg-[rgba(92,111,255,0.10)] border border-[rgba(92,111,255,0.20)] flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#5C6FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
