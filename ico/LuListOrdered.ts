import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListOrdered icon from Lucide icons
 * @module
 */
export function LuListOrdered(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"10","x2":"21","y1":"6","y2":"6"}},{tag:"line",attr:{"x1":"10","x2":"21","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"10","x2":"21","y1":"18","y2":"18"},child:[]},{tag:"path",attr:{d:"M4 6h1v4"},child:[]},{tag:"path",attr:{d:"M4 10h2"},child:[]},{tag:"path",attr:{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"},child:[]}]})(props);
}
export default LuListOrdered;
