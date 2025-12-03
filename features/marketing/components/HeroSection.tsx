import Image from "next/image";
import { Button, ButtonLink } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#f7e9e4]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-lashes-PxfAvWQd.jpg"
          alt="Close-up of eye with eyelash extensions"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft light overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9e3dd]/95 via-[#f9e3dd]/80 to-[#f9e3dd]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#b98767]">
            Royalty Lash Beauty Lounge
          </p>

          <h1 className="font-heading text-4xl font-semibold tracking-tight text-[#4b3224] sm:text-5xl lg:text-[4.25rem] lg:leading-[0.9]">
            Luxe Lashes
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#8a6f5e] sm:text-lg">
            Elevate your natural beauty with our premium eyelash extension
            services. Expert artistry, custom styling, and stunning results that
            turn every glance into a moment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>Book Appointment</Button>
            <ButtonLink variant="secondary" href="#services">
              View Services
            </ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}
