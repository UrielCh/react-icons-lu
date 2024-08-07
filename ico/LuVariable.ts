import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Variable icon from Lucide icons
 * @module
 */
export function LuVariable(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 21s-4-3-4-9 4-9 4-9"}},{tag:"path",attr:{d:"M16 3s4 3 4 9-4 9-4 9"},child:[]},{tag:"line",attr:{"x1":"15","x2":"9","y1":"9","y2":"15"},child:[]},{tag:"line",attr:{"x1":"9","x2":"15","y1":"9","y2":"15"},child:[]}]})(props);
}
export default LuVariable;
