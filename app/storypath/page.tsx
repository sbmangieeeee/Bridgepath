import { CountryMap } from "@/components/production/CountryMap";
import "./storypath.css";
import "./focus.css";

export const metadata = {
  title: "StoryPath | Bridgepath",
  description: "Choose Arouca Groove from the StoryPath map.",
};

export default function StoryPathPage() {
  return <CountryMap />;
}
