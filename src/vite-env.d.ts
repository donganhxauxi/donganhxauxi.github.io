/// <reference types="vite/client" />
import { ThreeElements } from "@react-three/fiber";
import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      item: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
