import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Italic icon from Lucide icons
 * @module
 */
export function LuItalic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"19","x2":"10","y1":"4","y2":"4"}},{tag:"line",attr:{"x1":"14","x2":"5","y1":"20","y2":"20"},child:[]},{tag:"line",attr:{"x1":"15","x2":"9","y1":"4","y2":"20"},child:[]}]})(props);
}
export default LuItalic;
