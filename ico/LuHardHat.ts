import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HardHat icon from Lucide icons
 * @module
 */
export function LuHardHat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"}},{tag:"path",attr:{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"},child:[]},{tag:"path",attr:{d:"M4 15v-3a6 6 0 0 1 6-6h0"},child:[]},{tag:"path",attr:{d:"M14 6h0a6 6 0 0 1 6 6v3"},child:[]}]})(props);
}
export default LuHardHat;
