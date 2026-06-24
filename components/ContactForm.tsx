"use client";

import { useState, FormEvent, useEffect, useRef } from "react";

const GIROS = [
  { value: "", label: "Selecciona tu giro" },
  { value: "spa_bronceado", label: "Spa / Bronceado" },
  { value: "tatuajes_barberia", label: "Tatuajes / Barbería" },
  { value: "car_detailing", label: "Car Detailing" },
  { value: "cafeteria", label: "Cafetería" },
  { value: "otro", label: "Otro" },
];

interface FormState {
  nombre: string;
  negocio: string;
  giro: string;
  giroPersonalizado: string;
  whatsapp: string;
  mensaje: string;
}

const INITIAL: FormState = {
  nombre: "", negocio: "", giro: "", giroPersonalizado: "", whatsapp: "", mensaje: "",
};

const inputClass =
  "bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder-[#404040] focus:outline-none focus:border-[rgba(92,111,255,0.50)] focus:bg-[#0D0D0D] transition-all text-sm";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="text-[#5C6FFF] text-xs font-semibold uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Agenda tu demo<br className="hidden sm:block" /> gratuita.
          </h2>
          <p className="mt-5 text-[#707070] max-w-md mx-auto text-base leading-relaxed">
            Cuéntanos sobre tu negocio y en menos de 24 horas te enviamos una
            demo personalizada.
          </p>
        </div>

        {/* Card */}
        <div className="fade-up fade-delay-1 bg-[#0F0F0F] border border-[#1A1A1A] rounded-3xl p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center gap-6 py-8 text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "rgba(92,111,255,0.10)", border: "1px solid rgba(92,111,255,0.20)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                ¡Gracias, {form.nombre}!
              </h3>
              <p className="text-[#909090] text-lg leading-relaxed max-w-sm">
                Te contactamos en menos de{" "}
                <span className="text-white font-bold">24 horas</span> con
                tu demo personalizada.
              </p>
              <p className="text-[#505050] text-sm">
                Te escribiremos al WhatsApp{" "}
                <span className="text-[#909090]">{form.whatsapp}</span>
              </p>
              <button
                onClick={() => { setForm(INITIAL); setSubmitted(false); }}
                className="mt-2 text-sm text-[#5C6FFF] hover:underline"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Nombre */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#909090]">
                  Tu nombre <span className="text-[#5C6FFF]">*</span>
                </label>
                <input
                  type="text" name="nombre" value={form.nombre}
                  onChange={handleChange} required
                  placeholder="Ej. Alejandro García"
                  className={inputClass}
                />
              </div>

              {/* Negocio */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#909090]">
                  Nombre del negocio <span className="text-[#5C6FFF]">*</span>
                </label>
                <input
                  type="text" name="negocio" value={form.negocio}
                  onChange={handleChange} required
                  placeholder="Ej. Bronceado Lux, Studio Ink..."
                  className={inputClass}
                />
              </div>

              {/* Giro */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#909090]">
                  Giro del negocio <span className="text-[#5C6FFF]">*</span>
                </label>
                <select
                  name="giro" value={form.giro}
                  onChange={handleChange} required
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  {GIROS.map((g) => (
                    <option key={g.value} value={g.value} disabled={g.value === ""} className="bg-[#111]">
                      {g.label}
                    </option>
                  ))}
                </select>
                {form.giro === "otro" && (
                  <input
                    type="text" name="giroPersonalizado" value={form.giroPersonalizado}
                    onChange={handleChange} required autoFocus
                    placeholder="Ej. Estética, Gym, Papelería..."
                    className={`${inputClass} mt-2 border-[rgba(92,111,255,0.30)]`}
                  />
                )}
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#909090]">
                  WhatsApp <span className="text-[#5C6FFF]">*</span>
                </label>
                <input
                  type="tel" name="whatsapp" value={form.whatsapp}
                  onChange={handleChange} required
                  placeholder="+52 55 1234 5678"
                  className={inputClass}
                />
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#909090]">
                  Mensaje <span className="text-[#404040] font-normal">(opcional)</span>
                </label>
                <textarea
                  name="mensaje" value={form.mensaje}
                  onChange={handleChange} rows={3}
                  placeholder="Cuéntanos brevemente qué proceso quieres automatizar..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full bg-gold text-[#080808] font-black py-4 rounded-xl text-base transition-all hover:brightness-110 hover:scale-[1.01] active:scale-[0.99]"
                style={{ boxShadow: "0 4px 24px rgba(201,168,76,0.22)" }}
              >
                Quiero mi demo personalizada →
              </button>

              <p className="text-center text-xs text-[#404040]">
                Sin spam · Respondemos en menos de 24 horas
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
