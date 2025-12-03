"use client";

import { useState } from "react";

const categories = [
  "All",
  "Lash Extensions",
  "Facial Treatments",
  "Other Services",
];

const allServices = [
  // Lash extensions (actual menu)
  {
    category: "Lash Extensions",
    name: "Ordinary Classic",
    duration: "90 min",
    price: "PHP 379.00",
    description:
      "Thickness: 0.15mm–0.20mm · Density: 1:1 lashes. Normal/round lashes are used. Fullness varies based on your natural lashes. Not ideal for short or sparse lashes.",
  },
  {
    category: "Lash Extensions",
    name: "Sassy Classic",
    duration: "90 min",
    price: "PHP 449.00",
    description:
      "Thickness: 0.15mm–0.20mm · Density: 1:1 lashes. Flat lashes with split tips for a fuller but still natural finish. Also called "Airy Lashes." Perfect for an everyday look.",
  },
  {
    category: "Lash Extensions",
    name: "Mascara Look",
    duration: "90 min",
    price: "PHP 499.00",
    description:
      "Thickness: 0.07mm–0.10mm · Density: 2–3 lashes on each fan. A more intense yet still natural-looking set — a beautiful semi-volume style.",
  },
  {
    category: "Lash Extensions",
    name: "Hybrid",
    duration: "120 min",
    price: "PHP 599.00",
    description:
      "Thickness: 0.20, 0.03 · Density: 1:1, 4–7:1. Alternating classic and volume lashes for a fuller look without too much drama.",
  },
  {
    category: "Lash Extensions",
    name: "Volume",
    duration: "120 min",
    price: "PHP 699.00",
    description:
      "Thickness: 0.05mm · Density: 4–7 lashes on each fan. Finer lashes that feel light but create a dense, fuller appearance than hybrids — suits almost everyone.",
  },
  {
    category: "Lash Extensions",
    name: "Mega Volume",
    duration: "150 min",
    price: "PHP 999.00",
    description:
      "Thickness: 0.03mm · Density: 7–16 lashes on each fan. Ultra-dense, full-drama lashes for the boldest, darkest lash look.",
  },

  // Example facial + other services (still mock)
  {
    category: "Facial Treatments",
    name: "Hydrating Glow Facial",
    duration: "60 min",
    price: "PHP 299.00",
    description:
      "Deep cleansing, gentle exfoliation, and a hydrating mask to restore your natural glow.",
  },
  {
    category: "Other Services",
    name: "Brow Shaping & Tint",
    duration: "45 min",
    price: "PHP 250.00",
    description:
      "Custom brow mapping, shaping, and tint to frame your eyes and complete your look.",
  },
];

type ServicesContentProps = {
  initialCategory: string;
};

export function ServicesContent({ initialCategory }: ServicesContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const filteredServices =
    activeCategory === "All"
      ? allServices
      : allServices.filter((service) => service.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#fbf4ef] px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:gap-14">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b98767]">
            All Services
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#3f2a1e] sm:text-4xl lg:text-[2.6rem]">
            Tailored treatments for effortless beauty.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#8a6f5e]">
            Explore every service we offer, from custom lash sets to relaxing
            facials, designed to enhance your natural features and fit your
            lifestyle.
          </p>
        </header>

        {/* Filters mockup */}
        <section className="flex flex-wrap gap-3 rounded-full bg-white/70 p-3 ring-1 ring-[#f0dbcf]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                cat === activeCategory
                  ? "bg-[#4b3224] text-white shadow-sm shadow-[#c19b82]/60"
                  : "bg-transparent text-[#6f5140] hover:bg-[#fdf5f0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Services list mockup */}
        <section className="grid gap-5 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-4">
            {filteredServices.map((service) => (
              <article
                key={service.name}
                className="rounded-3xl bg-white p-5 shadow-[0_18px_45px_rgba(210,166,140,0.18)] ring-1 ring-[#f4ddd0]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c19674]">
                      {service.category}
                    </p>
                    <h2 className="mt-1 font-heading text-xl font-semibold tracking-tight text-[#3f2a1e]">
                      {service.name}
                    </h2>
                  </div>
                  <div className="text-right text-xs text-[#9a8273]">
                    <p className="flex items-center justify-end gap-1">
                      <span className="text-sm">⏱</span>
                      <span>{service.duration}</span>
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#d49c3d]">
                      {service.price}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#8a6f5e]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          {/* Sidebar mockup */}
          <aside className="flex flex-col justify-between gap-5 rounded-3xl bg-gradient-to-b from-white/95 to-[#f7e2d6]/80 p-6 shadow-[0_18px_45px_rgba(210,166,140,0.18)] ring-1 ring-[#f4ddd0]">
            <div>
              <h3 className="font-heading text-lg font-semibold tracking-tight text-[#3f2a1e]">
                Not sure where to start?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#8a6f5e]">
                Share your lash goals and skin concerns, and we&apos;ll
                recommend a treatment plan perfectly tailored to you.
              </p>
            </div>
            <div className="space-y-2 text-sm text-[#8a6f5e]">
              <p>
                • Consultations are complimentary and take around 10 minutes.
              </p>
              <p>• All services include aftercare guidance for best results.</p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
