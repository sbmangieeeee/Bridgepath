import Link from "next/link";
import { AroucaGrooveStopList } from "@/components/production/AroucaGrooveStopList";
import { AROUCA_GROOVE } from "@/lib/production/arouca-groove";

export default function AroucaGrovePage() {
  return <div className="production-page">
    <nav aria-label="Breadcrumb"><Link href="/">Bridgepath prototype</Link> <span aria-hidden="true">/</span> Arouca Groove</nav>
    <header><p className="production-eyebrow">Karina · Standard 3 Mathematics</p><h1>{AROUCA_GROOVE.name}</h1><p>Arouca Groove has 18 learning stops to explore. The Corner Shop Challenge is open now, and more adventures will unlock later.</p></header>
    <AroucaGrooveStopList stops={AROUCA_GROOVE.stops} />
  </div>;
}
