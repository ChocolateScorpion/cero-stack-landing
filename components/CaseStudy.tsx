const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
    title: "OCR de Comprobantes",
    description:
      "La app lee automáticamente las transferencias y pagos de los clientes, eliminando la captura manual y los errores humanos.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Comisiones Automáticas",
    description:
      "Calcula y distribuye comisiones por artista en tiempo real. Cero discusiones, cero cálculos manuales al cerrar la semana.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    ),
    title: "Reportes Mensuales",
    description:
      "Dashboard con ingresos por artista, servicios más populares y comparativa mensual. Toma decisiones con datos reales.",
  },
];

export default function CaseStudy() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Caso de Éxito
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Lúcida App — Estudio de Tatuajes
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Un estudio de tatuajes nos pidió orden en sus cobros y comisiones.
            Entregamos una app completa que transformó su operación diaria.
          </p>
        </div>

        {/* Main card */}
        <div
          className="rounded-3xl border border-[rgba(201,168,76,0.25)] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(9,9,9,0) 60%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: story */}
            <div className="p-10 lg:p-14 flex flex-col justify-center gap-6 border-b lg:border-b-0 lg:border-r border-[rgba(201,168,76,0.15)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.15)] flex items-center justify-center text-gold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="text-gold font-semibold text-sm">
                  Problema resuelto
                </span>
              </div>

              <blockquote className="text-gray-300 text-lg leading-relaxed italic border-l-2 border-gold pl-5">
                "Antes perdíamos horas revisando transferencias en WhatsApp y
                calculando comisiones a mano. Ahora todo está automatizado y
                mis artistas confían 100% en los números."
              </blockquote>

              <p className="text-gray-500 text-sm">
                — Propietario, Estudio Lúcida
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: "0", label: "Errores de cobro" },
                  { value: "-4h", label: "Admin por semana" },
                  { value: "100%", label: "Confianza del equipo" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-gold">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: features */}
            <div className="p-10 lg:p-14 flex flex-col gap-7">
              <h3 className="text-white font-semibold text-lg">
                Lo que construimos
              </h3>
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{f.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {f.description}
                    </p>
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
