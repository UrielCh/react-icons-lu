import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WrapText icon from Lucide icons
 * @module
 */
export function LuWrapText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"21","y1":"6","y2":"6"}},{tag:"path",attr:{d:"M3 12h15a3 3 0 1 1 0 6h-4"},child:[]},{tag:"polyline",attr:{"points":"16 16 14 18 16 20"},child:[]},{tag:"line",attr:{"x1":"3","x2":"10","y1":"18","y2":"18"},child:[]}]})(props);
}
export default LuWrapText;
