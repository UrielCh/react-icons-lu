import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignJustify icon from Lucide icons
 * @module
 */
export function LuAlignJustify(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"21","y1":"6","y2":"6"}},{tag:"line",attr:{"x1":"3","x2":"21","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"3","x2":"21","y1":"18","y2":"18"},child:[]}]})(props);
}
export default LuAlignJustify;
