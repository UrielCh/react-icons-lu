import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Terminal icon from Lucide icons
 * @module
 */
export function LuTerminal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"4 17 10 11 4 5"}},{tag:"line",attr:{"x1":"12","x2":"20","y1":"19","y2":"19"},child:[]}]})(props);
}
export default LuTerminal;
