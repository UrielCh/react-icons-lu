import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Delete icon from Lucide icons
 * @module
 */
export function LuDelete(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"}},{tag:"line",attr:{"x1":"18","x2":"12","y1":"9","y2":"15"},child:[]},{tag:"line",attr:{"x1":"12","x2":"18","y1":"9","y2":"15"},child:[]}]})(props);
}
export default LuDelete;
