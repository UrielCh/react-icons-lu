import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveHorizontal icon from Lucide icons
 * @module
 */
export function LuMoveHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"18 8 22 12 18 16"}},{tag:"polyline",attr:{"points":"6 8 2 12 6 16"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"12","y2":"12"},child:[]}]})(props);
}
export default LuMoveHorizontal;
