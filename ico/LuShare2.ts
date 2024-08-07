import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Share2 icon from Lucide icons
 * @module
 */
export function LuShare2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"5","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"12","r":"3"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"19","r":"3"},child:[]},{tag:"line",attr:{"x1":"8.59","x2":"15.42","y1":"13.51","y2":"17.49"},child:[]},{tag:"line",attr:{"x1":"15.41","x2":"8.59","y1":"6.51","y2":"10.49"},child:[]}]})(props);
}
export default LuShare2;
