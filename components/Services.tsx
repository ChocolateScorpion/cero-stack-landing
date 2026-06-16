const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
        <path d="M12 15h.01" />
        <path d="M8 15h.01" />
        <path d="M16 15h.01" />
      </svg>
    ),
    title: "App de Registro y Cobros",
    description:
      "Registra ventas, genera tickets, acepta pagos y lleva un control claro de tu caja diaria desde tu celular. Sin complicaciones, sin papel.",
    features: ["Tickets digitales", "Control de caja", "Reportes de ventas"],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Agenda y Clientes",
    description:
      "Gestiona citas, historial de clientes y recordatorios automáticos. Reduce los no-shows y da una experiencia profesional desde el primer contacto.",
    features: ["Citas en línea", "Recordatorios WhatsApp", "Historial de clientes"],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
    title: "Bot de WhatsApp",
    description:
      "Automatiza respuestas, agenda citas, confirma pagos y atiende a tus clientes 24/7 sin tener que estar pegado al teléfono.",
    features: ["Respuestas automáticas", "Confirmación de citas", "Atención 24/7"],
  },
];

export default function Services() {
  return (
    <section className="bg-dark-section py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Herramientas que trabajan para ti
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Cada solución es desarrollada específicamente para tu negocio y tu
            forma de trabajar.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover bg-dark-card border border-dark-border rounded-2xl p-8 flex flex-col gap-5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-gold">
                {service.icon}
              </div>

              {/* Title & desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Feature pills */}
              <ul className="flex flex-col gap-2 mt-auto">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
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
