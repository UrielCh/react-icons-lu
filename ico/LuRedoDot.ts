import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RedoDot icon from Lucide icons
 * @module
 */
export function LuRedoDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"17","r":"1"}},{tag:"path",attr:{d:"M21 7v6h-6"},child:[]},{tag:"path",attr:{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"},child:[]}]})(props);
}
export default LuRedoDot;
