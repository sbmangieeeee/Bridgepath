import Link from "next/link";
import { ParalinStopList } from "@/components/production/AroucaGrooveStopList";
import { PARALIN } from "@/lib/production/arouca-groove";

export default function ParalinPage() {
  return <div className="production-page">
    <nav aria-label="Breadcrumb"><Link href="/">Storypath prototype</Link> <span aria-hidden="true">/</span> Paralin</nav>
    <header><p className="production-eyebrow">Storypath · Standard 3 Mathematics</p><h1>{PARALIN.name}</h1><p>Paralin has 18 learning stops to explore. The Corner Shop Challenge is open now, and more adventures will unlock later.</p></header>
    <ParalinStopList stops={PARALIN.stops} />
  </div>;
}
