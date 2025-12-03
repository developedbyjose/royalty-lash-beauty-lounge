const services = [
  {
    name: "Facial Treatments",
    duration: "120 min",
    price: "PHP 299.00",
    description:
      "A range of facials to relax and rejuvenate your skin, tailored for a radiant glow.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lash Extensions",
    duration: "90 min",
    price: "PHP 379.00",
    description:
      "One extension per natural lash for a refined enhancement that adds length and definition.",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Massage Therapy",
    duration: "60 min",
    price: "PHP 250.00",
    description:
      "Soothe tired muscles with gentle Swedish to deep tissue techniques that melt stress away.",
    image:
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nail Care",
    duration: "75 min",
    price: "PHP 199.00",
    description:
      "Luxurious manicure and pedicure complete with polish, shaping, and a soothing massage.",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Body Scrubs",
    duration: "45 min",
    price: "PHP 220.00",
    description:
      "Exfoliate and hydrate with invigorating scrubs that leave your skin smooth and refreshed.",
    image:
      "https://images.unsplash.com/photo-1505577375221-788f08c35f4a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Waxing Services",
    duration: "30 min",
    price: "PHP 150.00",
    description:
      "Professional and gentle waxing tailored for different areas of the body.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
  },
];

const lashOptions = [
  {
    name: "ORDINARY CLASSIC",
    price: "P379",
    thickness: "Thickness: 0.15mm–0.20mm",
    density: "Density: 1:1 lashes",
    notes:
      "Normal/Round lashes are used. The fullness of this set will vary upon the fullness of your natural lashes. Not ideal for someone with short or sparse lashes.",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "SASSY CLASSIC",
    price: "P449",
    thickness: "Thickness: 0.15mm–0.20mm",
    density: "Density: 1:1 lashes",
    notes:
      "Flat lashes with split tips are used, it will look fuller with a more natural finish. Sometimes called “Airy Lashes.” Perfect for everyday look!",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "MASCARA LOOK",
    price: "P499",
    thickness: "Thickness: 0.07mm–0.10mm",
    density: "Density: 2–3 lashes on each fan",
    notes:
      "A more intense but still natural-looking lashes! It is a semi-volume lash.",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "HYBRID",
    price: "P599",
    thickness: "Thickness: 0.20, 0.03",
    density: "Density: 1:1, 4–7:1",
    notes:
      "Alternating classic and volume lashes. It will give you a fuller look without the drama. Try this babe!",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "VOLUME",
    price: "P699",
    thickness: "Thickness: 0.05mm",
    density: "Density: 4–7 lashes on each fan",
    notes:
      "A much finer lashes. It will give you a light dense but fuller than hybrids. This set suits for everyone!",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "MEGA VOLUME",
    price: "P999",
    thickness: "Thickness: 0.03mm",
    density: "Density: 7–16 lashes on each fan",
    notes:
      "These lashes look incredibly dense and full drama. If you want the fullest and darkest set, this one is the best!",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  },
];

export default async function ServicesPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params?.category ?? "";
  const categoryLower = category.toLowerCase();
  let filteredServices;
  if (category && categoryLower.includes("lash")) {
    filteredServices = lashOptions;
  } else if (category) {
    filteredServices = services.filter(
      (s) => s.name.toLowerCase() === categoryLower
    );
  } else {
    filteredServices = services;
  }

  return (
    <main className="min-h-screen bg-[#fbf4ef] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#c5916a]">
            Our Services
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#3f2a1e] sm:text-4xl">
            {category
              ? `${category} Services`
              : "Premium lash extensions tailored to enhance your natural beauty. ♡"}
          </h1>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <article
              key={service.name}
              className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_18px_45px_rgba(210,166,140,0.18)] ring-1 ring-[#f4ddd0]"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#f6d8c6]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-[#3f2a1e]">
                    {service.name}
                  </h2>
                  {"thickness" in service ? (
                    <div className="mt-2 text-sm text-[#9a7b67]">
                      <div>{service.thickness}</div>
                      <div className="mt-1">{service.density}</div>
                      <div className="mt-2 font-semibold text-[#d47b34]">
                        {service.price}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2 flex items-center gap-2 text-sm text-[#9a7b67]">
                      <span className="text-base">⏱</span>
                      <span>{service.duration}</span>
                      <span className="text-[#d9c2b5]">•</span>
                      <span className="font-semibold text-[#d47b34]">
                        {service.price}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-[#8a6f5e]">
                  {"notes" in service ? service.notes : service.description}
                </p>

                <button
                  type="button"
                  className="mt-auto rounded-full bg-[#ff8b63] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#f37b52]"
                >
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
