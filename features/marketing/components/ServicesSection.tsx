"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./ServicesSection.module.css";

const services = [
  {
    name: "Facial Treatments",
    category: "Facial Treatments",
    description:
      "A range of facial treatments to help you relax and rejuvenate your skin.",
    image: "/pexels-shiny-diamond-3762456.jpg",
  },
  {
    name: "Lash Extensions",
    category: "Lash Extensions",
    description:
      "One extension per natural lash for a natural, elegant enhancement that adds length and definition.",
    image: "/pexels-pixabay-63320.jpg",
  },
  {
    name: "Semi Permanent Makeup",
    category: "Semi Permanent Makeup",
    description:
      "Long-lasting makeup solutions to enhance your features with minimal daily effort.",
    image: "/pexels-denys-12115041.jpg",
  },
  {
    name: "Lash Extension Refills",
    category: "Lash Extension Refills",
    description:
      "Maintain your lash extensions with professional refills for a consistently beautiful look.",
    image: "/pexels-cottonbro-4721517.jpg",
  },
  {
    name: "Other Services",
    category: "Other Services",
    description: "Additional beauty services to enhance your natural look.",
    image: "/pexels-aditi-ahalawat-2062245-6233289.jpg",
  },
];

export function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 3);

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

        <div
          className={`mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${styles.servicesGrid}`}
        >
          {displayedServices.map((service, index) => (
            <article
              key={service.name}
              style={{
                animationDelay:
                  showAll && index >= 3 ? `${(index - 3) * 100}ms` : undefined,
                animationPlayState:
                  showAll && index >= 3 ? "running" : "initial",
              }}
              className={`relative flex h-full flex-col rounded-3xl bg-white/95 overflow-hidden shadow-[0_24px_60px_rgba(210,166,140,0.16)] ring-1 ring-[#f4ddd0] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(210,166,140,0.22)] ${
                showAll && index >= 3 ? styles.slideIn : ""
              } ${!showAll && index >= 3 ? styles.slideOut : ""}`}
            >
              <div className="relative h-48 w-full bg-gradient-to-br from-[#e8d4c4] to-[#d4bfb0] flex items-center justify-center overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 p-7 flex flex-col">
                <h3 className="text-lg font-semibold tracking-tight text-[#3f2a1e]">
                  {service.name}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#8a6f5e] flex-1">
                  {service.description}
                </p>

                <div className="mt-6 flex justify-center">
                  <ButtonLink
                    href={`/services?category=${encodeURIComponent(
                      service.category
                    )}`}
                    variant="secondary"
                    size="sm"
                    className="shadow-none"
                  >
                    View Services
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll && services.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent px-6 py-2.5 text-sm border border-[#d3b49f] bg-white/80 text-[#6f5140] shadow-sm hover:bg-white hover:border-[#c49a85]"
            >
              Show More
            </button>
          </div>
        )}

        {showAll && services.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent px-6 py-2.5 text-sm border border-[#d3b49f] bg-white/80 text-[#6f5140] shadow-sm hover:bg-white hover:border-[#c49a85]"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
