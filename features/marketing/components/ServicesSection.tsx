import { ButtonLink } from "@/components/ui/Button";

const services = [
  {
    name: "Facial Treatments",
    category: "Facial Treatments",
    duration: "120 min",
    price: "PHP 299.00",
    description:
      "A range of facial treatments to help you relax and rejuvenate your skin.",
    icon: "heart",
  },
  {
    name: "Last Extensions",
    category: "Lash Extensions",
    duration: "90 min",
    price: "PHP 379.00",
    description:
      "One extension per natural lash for a natural, elegant enhancement that adds length and definition.",
    icon: "sparkles",
  },
  {
    name: "Other Services",
    category: "Other Services",
    duration: "60 min",
    price: "PHP 399.00",
    description: "Other services to enhance your natural beauty.",
    icon: "clock",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const gradient =
    "inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f36a52] via-[#f89a4b] to-[#f6c667] text-white shadow-sm";

  if (type === "heart") {
    return (
      <span className={gradient}>
        <span className="text-lg">♡</span>
      </span>
    );
  }

  if (type === "clock") {
    return (
      <span className={gradient}>
        <span className="text-lg">⏰</span>
      </span>
    );
  }

  // default sparkles
  return (
    <span className={gradient}>
      <span className="text-lg">✧</span>
    </span>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#fbf4ef] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#3f2a1e] sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#8a6f5e] sm:text-lg">
            Premium lash extensions tailored to enhance your natural beauty.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="relative flex h-full min-h-[260px] flex-col rounded-3xl bg-white/95 p-7 shadow-[0_24px_60px_rgba(210,166,140,0.16)] ring-1 ring-[#f4ddd0] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(210,166,140,0.22)]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <ServiceIcon type={service.icon} />
                  <h3 className="text-lg font-semibold tracking-tight text-[#3f2a1e]">
                    {service.name}
                  </h3>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-[#9a8273]">
                  <span className="flex items-center gap-1">
                    <span className="text-base">⏱</span>
                    <span>{service.duration}</span>
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-[#d49c3d]">
                    {service.price}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#8a6f5e]">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <ButtonLink
                  href={`/services?category=${encodeURIComponent(
                    service.category
                  )}`}
                  variant="secondary"
                  size="sm"
                  className="shadow-none"
                >
                  View more
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
