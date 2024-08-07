import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tent icon from Lucide icons
 * @module
 */
export function LuTent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 20 10 4"}},{tag:"path",attr:{d:"m5 20 9-16"},child:[]},{tag:"path",attr:{d:"M3 20h18"},child:[]},{tag:"path",attr:{d:"m12 15-3 5"},child:[]},{tag:"path",attr:{d:"m12 15 3 5"},child:[]}]})(props);
}
export default LuTent;
