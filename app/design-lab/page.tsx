import type { Metadata } from "next";
import CharacterDesignLab from "@/components/CharacterDesignLab";
import "./design-lab.css";

export const metadata: Metadata = {
  title: "Character Design Lab | Bridgepath",
  description: "Internal visual validation prototype for Niko and Zuri.",
};

export default function DesignLabPage() {
  return <CharacterDesignLab />;
}
