import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Move icon from Lucide icons
 * @module
 */
export function LuMove(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"5 9 2 12 5 15"}},{tag:"polyline",attr:{"points":"9 5 12 2 15 5"},child:[]},{tag:"polyline",attr:{"points":"15 19 12 22 9 19"},child:[]},{tag:"polyline",attr:{"points":"19 9 22 12 19 15"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"22"},child:[]}]})(props);
}
export default LuMove;
