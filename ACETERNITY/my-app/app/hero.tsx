"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-white flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-black relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-black relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
