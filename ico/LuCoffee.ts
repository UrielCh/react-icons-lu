import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Coffee icon from Lucide icons
 * @module
 */
export function LuCoffee(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 8h1a4 4 0 1 1 0 8h-1"}},{tag:"path",attr:{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"2","y2":"4"},child:[]},{tag:"line",attr:{"x1":"10","x2":"10","y1":"2","y2":"4"},child:[]},{tag:"line",attr:{"x1":"14","x2":"14","y1":"2","y2":"4"},child:[]}]})(props);
}
export default LuCoffee;
