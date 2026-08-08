import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { rooms } from "@/data/rooms";
import { RoomCard } from "./RoomCard";
import { Reveal } from "./Reveal";

export function RoomsPreview() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:py-40">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <Reveal>
            <p className="eyebrow">03 — Rooms & Suites</p>
          </Reveal>
          <Reveal delay={0.08}>
            <motion.h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.5rem)]">
              Stay a little longer.
            </motion.h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <Link to="/stay" className="rule-link">
            All rooms
          </Link>
        </Reveal>
      </div>

      <div className="mt-20 space-y-24 lg:space-y-32">
        {rooms.slice(0, 3).map((room, index) => (
          <RoomCard key={room.slug} room={room} index={index} />
        ))}
      </div>
    </section>
  );
}
