import { LessonRunner } from "@/components/production/LessonRunner";
import { CORNER_SHOP_ACTIVITIES } from "@/lib/production/arouca-groove";

export default function CornerShopChallengePage() {
  return <LessonRunner title="The Corner Shop Challenge" activities={CORNER_SHOP_ACTIVITIES} />;
}
