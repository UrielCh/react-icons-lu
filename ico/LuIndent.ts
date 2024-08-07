import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Indent icon from Lucide icons
 * @module
 */
export function LuIndent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"3 8 7 12 3 16"}},{tag:"line",attr:{"x1":"21","x2":"11","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"21","x2":"11","y1":"6","y2":"6"},child:[]},{tag:"line",attr:{"x1":"21","x2":"11","y1":"18","y2":"18"},child:[]}]})(props);
}
export default LuIndent;
