import { BoxesCore } from "@/components/ui/background-boxes";
import Image from "next/image";
import { BackgroundBoxesDemo } from "./hero";
import { CanvasRevealEffectDemo } from "./canvas-reveal";
import { ExpandableCardDemo } from "./expand-card";

export default function Home() {
  return (
    <div>
   <BackgroundBoxesDemo />
   <CanvasRevealEffectDemo />
   <ExpandableCardDemo />
   </div>
  );
}
