import Link from "next/link";
import type { LearningStop } from "@/lib/production/types";

export function AroucaGrooveStopList({ stops }: { stops: readonly LearningStop[] }) {
  return <ol className="stop-list">
    {stops.map((stop) => <li key={stop.id}>
      <span aria-hidden="true">{stop.order}</span>
      <div><h2>{stop.name}</h2>{stop.order === 5 ? <Link href="/arouca-groove/corner-shop-challenge">Open placeholder lesson</Link> : <p>Production lesson content pending approval.</p>}</div>
    </li>)}
  </ol>;
}
