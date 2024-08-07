import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserPlus icon from Lucide icons
 * @module
 */
export function LuUserPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{"cx":"9","cy":"7","r":"4"},child:[]},{tag:"line",attr:{"x1":"19","x2":"19","y1":"8","y2":"14"},child:[]},{tag:"line",attr:{"x1":"22","x2":"16","y1":"11","y2":"11"},child:[]}]})(props);
}
export default LuUserPlus;
