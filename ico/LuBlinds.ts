import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Blinds icon from Lucide icons
 * @module
 */
export function LuBlinds(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3h18"}},{tag:"path",attr:{d:"M20 7H8"},child:[]},{tag:"path",attr:{d:"M20 11H8"},child:[]},{tag:"path",attr:{d:"M10 19h10"},child:[]},{tag:"path",attr:{d:"M8 15h12"},child:[]},{tag:"path",attr:{d:"M4 3v14"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"19","r":"2"},child:[]}]})(props);
}
export default LuBlinds;
