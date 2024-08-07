import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RockingChair icon from Lucide icons
 * @module
 */
export function LuRockingChair(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"3.5 2 6.5 12.5 18 12.5"}},{tag:"line",attr:{"x1":"9.5","x2":"5.5","y1":"12.5","y2":"20"},child:[]},{tag:"line",attr:{"x1":"15","x2":"18.5","y1":"12.5","y2":"20"},child:[]},{tag:"path",attr:{d:"M2.75 18a13 13 0 0 0 18.5 0"},child:[]}]})(props);
}
export default LuRockingChair;
