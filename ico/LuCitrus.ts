import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Citrus icon from Lucide icons
 * @module
 */
export function LuCitrus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}},{tag:"path",attr:{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"},child:[]},{tag:"path",attr:{d:"m14 10-5.5 5.5"},child:[]},{tag:"path",attr:{d:"M14 17.85V10H6.15"},child:[]}]})(props);
}
export default LuCitrus;
