import Link from "next/link";
import { LessonRunner } from "@/components/production/LessonRunner";
import { CORNER_SHOP_ACTIVITIES } from "@/lib/production/arouca-groove";

export default function CornerShopChallengePage() {
  return <div className="production-page">
    <nav aria-label="Breadcrumb"><Link href="/arouca-groove">Arouca Groove</Link> <span aria-hidden="true">/</span> Corner Shop Challenge</nav>
    <LessonRunner title="The Corner Shop Challenge" activities={CORNER_SHOP_ACTIVITIES} />
  </div>;
}
