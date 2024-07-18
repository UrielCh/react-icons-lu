import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BedSingle icon from Lucide icons
 * @module
 */
export function LuBedSingle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}},{tag:"path",attr:{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"},child:[]},{tag:"path",attr:{d:"M3 18h18"},child:[]}]})(props);
}
export default LuBedSingle;
