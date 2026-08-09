import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Room } from "@/data/rooms";

export function RoomCard({ room, index }: { room: Room; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="group grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12"
    >
      <Link
        to="/stay/$slug"
        params={{ slug: room.slug }}
        aria-label={`View ${room.name}`}
        className={[
          "relative block overflow-hidden lg:col-span-8",
          flipped ? "lg:order-2 lg:col-start-5" : "",
        ].join(" ")}
        data-cursor="View"
      >
        <img
          src={room.image}
          alt={`${room.name} at AURELIA — ${room.summary}`}
          width={1600}
          height={1100}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-700 group-hover:bg-foreground/15" />
        <div className="absolute right-6 bottom-6 flex translate-y-3 items-center gap-3 text-background opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="nav-label">View room</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </Link>

      <div className={["lg:col-span-4 lg:pb-4", flipped ? "lg:order-1 lg:col-start-1" : ""].join(" ")}>
        <p className="eyebrow">{room.index}</p>
        <h3 className="display mt-4 text-3xl transition-transform duration-700 group-hover:translate-x-2 sm:text-4xl">
          {room.name}
        </h3>
        <p className="mt-4 text-sm text-muted-foreground">{room.summary}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          From <span className="text-foreground">${room.price}</span> per night
        </p>
        <Link
          to="/stay/$slug"
          params={{ slug: room.slug }}
          className="rule-link mt-8 text-foreground"
        >
          View room
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
}
