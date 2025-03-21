import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Angry icon from Lucide icons
 * @module
 */
export function LuAngry(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M16 16s-1.5-2-4-2-4 2-4 2"},child:[]},{tag:"path",attr:{d:"M7.5 8 10 9"},child:[]},{tag:"path",attr:{d:"m14 9 2.5-1"},child:[]},{tag:"path",attr:{d:"M9 10h.01"},child:[]},{tag:"path",attr:{d:"M15 10h.01"},child:[]}]})(props);
}
export default LuAngry;
