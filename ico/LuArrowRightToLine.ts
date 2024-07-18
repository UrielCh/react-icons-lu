import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRightToLine icon from Lucide icons
 * @module
 */
export function LuArrowRightToLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 12H3"}},{tag:"path",attr:{d:"m11 18 6-6-6-6"},child:[]},{tag:"path",attr:{d:"M21 5v14"},child:[]}]})(props);
}
export default LuArrowRightToLine;
