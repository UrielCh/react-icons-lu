import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Scissors icon from Lucide icons
 * @module
 */
export function LuScissors(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"}},{tag:"path",attr:{d:"M8.12 8.12 12 12"},child:[]},{tag:"path",attr:{d:"M20 4 8.12 15.88"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"M14.8 14.8 20 20"},child:[]}]})(props);
}
export default LuScissors;
