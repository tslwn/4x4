import React from "react";
import { SVG } from "sr-puzzlegen";
import { AlgorithmCase, VisualizerType } from "@/types";
import { HEIGHT, WIDTH } from "@/utils";

export function useSVG(size: number, algorithm: AlgorithmCase): void {
  React.useEffect(() => {
    // clear container
    document.getElementById(algorithm.id)!.innerHTML = "";

    const [first] = algorithm.algorithms;

    // render svg into container
    SVG(`#${algorithm.id}`, algorithm.type ?? VisualizerType.CUBE, {
      width: WIDTH,
      height: HEIGHT,
      puzzle: {
        case: first.case + (first.casePrefix ?? ""),
        mask: first.mask,
        rotations: first.rotations,
        // @ts-ignore this is CubeOptions, not PuzzleOptions
        size,
        scheme: {
          U: { value: "#FFE629" }, // yellow
          R: { value: "#CE2C31" }, // red
          F: { value: "#0D74CE" }, // blue
          D: { value: "#FCFCFC" }, // white
          L: { value: "#F76B15" }, // orange
          B: { value: "#3E9B4F" }, // green
        },
      },
    });
  }, [size, algorithm]);
}
