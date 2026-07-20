import Link from "next/link";
import { AroucaGrooveStopList } from "@/components/production/AroucaGrooveStopList";
import { AROUCA_GROOVE } from "@/lib/production/arouca-groove";

export default function AroucaGrovePage() {
  return <div className="production-page">
    <nav aria-label="Breadcrumb"><Link href="/">Bridgepath prototype</Link> <span aria-hidden="true">/</span> Arouca Groove</nav>
    <header><p className="production-eyebrow">Karina · Standard 3 Mathematics</p><h1>{AROUCA_GROOVE.name}</h1><p>All 18 approved curriculum-related learning stops are available below as an accessible list. Map artwork is intentionally not included in this production foundation.</p></header>
    <AroucaGrooveStopList stops={AROUCA_GROOVE.stops} />
  </div>;
}
