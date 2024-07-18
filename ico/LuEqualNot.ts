import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * EqualNot icon from Lucide icons
 * @module
 */
export function LuEqualNot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"5","x2":"19","y1":"9","y2":"9"}},{tag:"line",attr:{"x1":"5","x2":"19","y1":"15","y2":"15"},child:[]},{tag:"line",attr:{"x1":"19","x2":"5","y1":"5","y2":"19"},child:[]}]})(props);
}
export default LuEqualNot;
