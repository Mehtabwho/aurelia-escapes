import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";

type BookingWidgetProps = {
  roomName?: string;
  tone?: "light" | "dark";
  compact?: boolean;
};

const guestOptions = ["1 Adult", "2 Adults", "2 Adults · 1 Child", "4 Adults"];

function isoPlus(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

export function BookingWidget({ roomName, tone = "light", compact = false }: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(guestOptions[1]!);
  const [status, setStatus] = useState<"idle" | "checking" | "available">("idle");

  useEffect(() => {
    setCheckIn(isoPlus(21));
    setCheckOut(isoPlus(25));
  }, []);

  const invalid = Boolean(checkIn && checkOut && checkOut <= checkIn);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (invalid) {
      toast.error("Check-out must be after check-in.");
      return;
    }
    setStatus("checking");
    window.setTimeout(() => {
      setStatus("available");
      toast.success(
        roomName ? `${roomName} is available for your dates.` : "Your dates are available.",
        { description: `${checkIn} → ${checkOut} · ${guests}` },
      );
    }, 1100);
  };

  const dark = tone === "dark";
  const field = [
    "w-full border-b bg-transparent pb-3 text-sm outline-none transition-colors",
    dark
      ? "border-background/25 text-background focus:border-background/70"
      : "border-border text-foreground focus:border-foreground",
  ].join(" ");

  return (
    <form
      onSubmit={onSubmit}
      className={[
        "w-full",
        dark ? "text-background" : "text-foreground",
        compact ? "" : "border p-8 sm:p-10",
        compact ? "" : dark ? "border-background/20" : "border-border bg-card",
      ].join(" ")}
    >
      <p className={dark ? "eyebrow text-background/60" : "eyebrow"}>Check availability</p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={dark ? "eyebrow text-background/50" : "eyebrow"}>Check-in</span>
          <input
            type="date"
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            className={`mt-3 ${field}`}
            required
          />
        </label>
        <label className="block">
          <span className={dark ? "eyebrow text-background/50" : "eyebrow"}>Check-out</span>
          <input
            type="date"
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            className={`mt-3 ${field}`}
            required
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={dark ? "eyebrow text-background/50" : "eyebrow"}>Guests</span>
          <select
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            className={`mt-3 ${field}`}
          >
            {guestOptions.map((option) => (
              <option key={option} value={option} className="text-foreground">
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      {invalid ? (
        <p className="mt-6 text-xs text-destructive">Check-out must be after check-in.</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "checking"}
        className={[
          "mt-10 w-full",
          dark
            ? "btn-ghost border-background/40 text-background hover:bg-background/10"
            : "btn-solid",
        ].join(" ")}
      >
        {status === "checking" ? "Checking…" : "Check availability"}
      </button>

      {status === "available" ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={[
            "mt-6 text-xs leading-relaxed",
            dark ? "text-background/70" : "text-muted-foreground",
          ].join(" ")}
        >
          Available — our host will confirm your reservation within one hour.
        </motion.p>
      ) : null}
    </form>
  );
}
