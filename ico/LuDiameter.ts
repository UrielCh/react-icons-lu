import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Diameter icon from Lucide icons
 * @module
 */
export function LuDiameter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"19","cy":"19","r":"2"}},{tag:"circle",attr:{"cx":"5","cy":"5","r":"2"},child:[]},{tag:"path",attr:{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"},child:[]},{tag:"path",attr:{d:"m6.41 6.41 11.18 11.18"},child:[]},{tag:"path",attr:{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"},child:[]}]})(props);
}
export default LuDiameter;
