import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpLeft icon from Lucide icons
 * @module
 */
export function LuArrowUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 17V7h10"}},{tag:"path",attr:{d:"M17 17 7 7"},child:[]}]})(props);
}
export default LuArrowUpLeft;
