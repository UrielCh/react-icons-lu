import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveDiagonal2 icon from Lucide icons
 * @module
 */
export function LuMoveDiagonal2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"5 11 5 5 11 5"}},{tag:"polyline",attr:{"points":"19 13 19 19 13 19"},child:[]},{tag:"line",attr:{"x1":"5","x2":"19","y1":"5","y2":"19"},child:[]}]})(props);
}
export default LuMoveDiagonal2;
