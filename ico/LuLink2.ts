import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Link2 icon from Lucide icons
 * @module
 */
export function LuLink2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attr:{d:"M15 7h2a5 5 0 1 1 0 10h-2"},child:[]},{tag:"line",attr:{"x1":"8","x2":"16","y1":"12","y2":"12"},child:[]}]})(props);
}
export default LuLink2;
