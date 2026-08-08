import { useState } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, X } from "lucide-react";
import { getRoom, rooms, type Room } from "@/data/rooms";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/stay/$slug")({
  loader: ({ params }) => {
    const room = getRoom(params.slug);
    if (!room) throw notFound();
    return { room };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Room unavailable — AURELIA" }, { name: "robots", content: "noindex" }] };
    }
    const { room } = loaderData;
    return {
      meta: [
        { title: `${room.name} — AURELIA Boutique Retreat` },
        { name: "description", content: `${room.summary}. ${room.description.slice(0, 110)}…` },
        { property: "og:title", content: `${room.name} — AURELIA Boutique Retreat` },
        { property: "og:description", content: room.summary },
      ],
    };
  },
  notFoundComponent: RoomNotFound,
  component: RoomDetail,
});

function RoomNotFound() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-52 pb-32 md:px-10">
      <p className="eyebrow">Not found</p>
      <h1 className="display mt-6 text-5xl">This room no longer exists.</h1>
      <Link to="/stay" className="rule-link mt-10">
        All rooms
      </Link>
    </div>
  );
}

function RoomDetail() {
  const { room } = Route.useLoaderData() as { room: Room };
  const [lightbox, setLightbox] = useState<number | null>(null);
  const others = rooms.filter((item) => item.slug !== room.slug).slice(0, 2);

  return (
    <>
      <section className="relative h-[86svh] min-h-[520px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          src={room.image}
          alt={`${room.name} at AURELIA`}
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.219_0.008_120_/_0.42)]" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 text-background md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[1600px]"
          >
            <p className="eyebrow text-background/70">{room.index} — Accommodation</p>
            <h1 className="display mt-6 text-[clamp(2.6rem,7vw,5.5rem)]">{room.name}</h1>
            <p className="mt-6 text-sm tracking-[0.16em] uppercase">{room.summary}</p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:py-28">
        <Link to="/stay" className="rule-link mb-16 inline-flex">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          All rooms
        </Link>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="display text-2xl leading-snug sm:text-3xl">{room.description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-16 grid grid-cols-2 gap-8 border-y border-border py-10 sm:grid-cols-4">
                {[
                  ["Size", room.size],
                  ["Guests", room.guests],
                  ["Bed", room.bed],
                  ["View", room.view],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="eyebrow">{label}</dt>
                    <dd className="mt-3 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-14">
                <p className="eyebrow">Amenities</p>
                <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                  {room.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="border-b border-border pb-4 text-sm text-muted-foreground"
                    >
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <div className="border border-border bg-card p-8 sm:p-10">
                  <p className="eyebrow">From</p>
                  <p className="display mt-3 text-4xl">
                    €{room.price}
                    <span className="text-base text-muted-foreground"> / night</span>
                  </p>
                  <div className="mt-8 border-t border-border pt-8">
                    <BookingWidget roomName={room.name} compact />
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>

        <section className="mt-24 lg:mt-32">
          <p className="eyebrow">Gallery</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {room.gallery.map((image, index) => (
              <Reveal key={image.src + index} delay={index * 0.07}>
                <button
                  type="button"
                  onClick={() => setLightbox(index)}
                  className="group block w-full overflow-hidden"
                  data-cursor="View"
                  aria-label={`Open image ${index + 1} of ${room.gallery.length}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-28 border-t border-border pt-16">
          <p className="eyebrow">Other rooms</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/stay/$slug"
                params={{ slug: other.slug }}
                className="group block"
                data-cursor="View"
              >
                <div className="overflow-hidden">
                  <img
                    src={other.image}
                    alt={other.name}
                    width={1600}
                    height={1100}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <h3 className="display mt-6 text-2xl transition-transform duration-700 group-hover:translate-x-2">
                  {other.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{other.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {lightbox !== null ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${room.name} gallery`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[oklch(0.219_0.008_120_/_0.94)] p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="nav-label absolute top-6 right-6 flex items-center gap-2 text-background"
            >
              Close
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              src={room.gallery[lightbox]!.src}
              alt={room.gallery[lightbox]!.alt}
              className="max-h-[86svh] w-auto max-w-full object-contain"
            />
            <div
              className="absolute bottom-6 flex gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              {room.gallery.map((image, index) => (
                <button
                  key={image.src + index}
                  type="button"
                  onClick={() => setLightbox(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={[
                    "h-px w-10 transition-colors duration-500",
                    lightbox === index ? "bg-background" : "bg-background/35",
                  ].join(" ")}
                />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
