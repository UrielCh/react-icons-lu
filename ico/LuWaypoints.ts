import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Waypoints icon from Lucide icons
 * @module
 */
export function LuWaypoints(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"4.5","r":"2.5"}},{tag:"path",attr:{d:"m10.2 6.3-3.9 3.9"},child:[]},{tag:"circle",attr:{"cx":"4.5","cy":"12","r":"2.5"},child:[]},{tag:"path",attr:{d:"M7 12h10"},child:[]},{tag:"circle",attr:{"cx":"19.5","cy":"12","r":"2.5"},child:[]},{tag:"path",attr:{d:"m13.8 17.7 3.9-3.9"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"19.5","r":"2.5"},child:[]}]})(props);
}
export default LuWaypoints;
