import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignCenter icon from Lucide icons
 * @module
 */
export function LuAlignCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"21","x2":"3","y1":"6","y2":"6"}},{tag:"line",attr:{"x1":"17","x2":"7","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"19","x2":"5","y1":"18","y2":"18"},child:[]}]})(props);
}
export default LuAlignCenter;
