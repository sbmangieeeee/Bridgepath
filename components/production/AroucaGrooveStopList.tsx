import Link from "next/link";
import type { LearningStop } from "@/lib/production/types";

export function AroucaGrooveStopList({ stops }: { stops: readonly LearningStop[] }) {
  return <ol className="stop-list">
    {stops.map((stop) => {
      const available = stop.slug === "the-corner-shop-challenge";
      return <li className={available ? "available" : "locked"} aria-disabled={available ? undefined : true} key={stop.id}>
      <span aria-hidden="true">{stop.order}</span>
      <div>
        <h2>{stop.name}</h2>
        <p className="stop-status">{available ? "Available" : "Locked · Coming later"}</p>
        {available && <Link className="stop-action" href="/arouca-groove/corner-shop-challenge">Start challenge</Link>}
      </div>
    </li>})}
  </ol>;
}
