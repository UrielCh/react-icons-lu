import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tent icon from Lucide icons
 * @module
 */
export function LuTent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.5 21 14 3"}},{tag:"path",attr:{d:"M20.5 21 10 3"},child:[]},{tag:"path",attr:{d:"M15.5 21 12 15l-3.5 6"},child:[]},{tag:"path",attr:{d:"M2 21h20"},child:[]}]})(props);
}
export default LuTent;
