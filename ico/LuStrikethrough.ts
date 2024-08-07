import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Strikethrough icon from Lucide icons
 * @module
 */
export function LuStrikethrough(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4H9a3 3 0 0 0-2.83 4"}},{tag:"path",attr:{d:"M14 12a4 4 0 0 1 0 8H6"},child:[]},{tag:"line",attr:{"x1":"4","x2":"20","y1":"12","y2":"12"},child:[]}]})(props);
}
export default LuStrikethrough;
