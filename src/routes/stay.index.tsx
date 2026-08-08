import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { RoomCard } from "@/components/site/RoomCard";
import { rooms } from "@/data/rooms";

export const Route = createFileRoute("/stay/")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — AURELIA Boutique Retreat" },
      {
        name: "description",
        content:
          "Eleven rooms, suites and villas at AURELIA — private gardens, ocean terraces and a panoramic residence with its own infinity pool.",
      },
      { property: "og:title", content: "Rooms & Suites — AURELIA Boutique Retreat" },
      {
        property: "og:description",
        content: "Private gardens, ocean terraces and a panoramic residence.",
      },
    ],
  }),
  component: StayPage,
});

const filters = [
  { id: "all", label: "All" },
  { id: "suite", label: "Suites" },
  { id: "villa", label: "Villas" },
  { id: "residence", label: "Residences" },
] as const;

function StayPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const visible = filter === "all" ? rooms : rooms.filter((room) => room.category === filter);

  return (
    <>
      <PageHeader
        label="Stay"
        title={<>Stay a little longer.</>}
        intro="Each room is oriented to its own view and its own hour of light. Rates include breakfast, wellness access and a slow departure."
      />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-y border-border py-6">
          {filters.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              aria-pressed={filter === option.id}
              className={[
                "nav-label transition-colors duration-500",
                filter === option.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {option.label}
            </button>
          ))}
          <span className="nav-label ml-auto text-muted-foreground">
            {visible.length} {visible.length === 1 ? "room" : "rooms"}
          </span>
        </div>

        <div className="space-y-24 py-20 lg:space-y-32 lg:py-28">
          {visible.map((room, index) => (
            <RoomCard key={room.slug} room={room} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
