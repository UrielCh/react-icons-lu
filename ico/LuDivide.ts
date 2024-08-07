import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Divide icon from Lucide icons
 * @module
 */
export function LuDivide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"6","r":"1"}},{tag:"line",attr:{"x1":"5","x2":"19","y1":"12","y2":"12"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"18","r":"1"},child:[]}]})(props);
}
export default LuDivide;
