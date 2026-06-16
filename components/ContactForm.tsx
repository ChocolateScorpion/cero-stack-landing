"use client";

import { useState, FormEvent } from "react";

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
  whatsapp: string;
  mensaje: string;
}

const INITIAL: FormState = {
  nombre: "",
  negocio: "",
  giro: "",
  whatsapp: "",
  mensaje: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Agenda tu demo gratuita
          </h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            Cuéntanos sobre tu negocio y en menos de 24 horas te enviamos una
            demo personalizada.
          </p>
        </div>

        {/* Card */}
        <div className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-10">
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center gap-6 py-8 text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.12)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">
                ¡Gracias, {form.nombre}!
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                Te contactamos en menos de{" "}
                <span className="text-gold font-semibold">24 horas</span> con
                tu demo personalizada.
              </p>
              <p className="text-gray-500 text-sm">
                Te escribiremos al WhatsApp{" "}
                <span className="text-gray-300">{form.whatsapp}</span>
              </p>
              <button
                onClick={() => {
                  setForm(INITIAL);
                  setSubmitted(false);
                }}
                className="mt-2 text-sm text-gold hover:underline"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Nombre */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">
                  Tu nombre <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Alejandro García"
                  className="bg-[#0D0D0D] border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Nombre del negocio */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">
                  Nombre del negocio <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="negocio"
                  value={form.negocio}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Bronceado Lux, Studio Ink..."
                  className="bg-[#0D0D0D] border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Giro */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">
                  Giro del negocio <span className="text-gold">*</span>
                </label>
                <select
                  name="giro"
                  value={form.giro}
                  onChange={handleChange}
                  required
                  className="bg-[#0D0D0D] border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                >
                  {GIROS.map((g) => (
                    <option
                      key={g.value}
                      value={g.value}
                      disabled={g.value === ""}
                      className="text-white bg-[#111]"
                    >
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">
                  WhatsApp <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="+52 55 1234 5678"
                  className="bg-[#0D0D0D] border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Mensaje opcional */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">
                  Mensaje{" "}
                  <span className="text-gray-600 font-normal">(opcional)</span>
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Cuéntanos brevemente qué proceso quieres automatizar..."
                  className="bg-[#0D0D0D] border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full bg-gold text-[#090909] font-bold py-4 rounded-xl text-base transition-all hover:brightness-110 hover:scale-[1.01] active:scale-[0.99]"
                style={{ boxShadow: "0 4px 24px rgba(201,168,76,0.25)" }}
              >
                Quiero mi demo personalizada
              </button>

              <p className="text-center text-xs text-gray-600">
                Sin spam · Respondemos en menos de 24 horas
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
