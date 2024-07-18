import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronLast icon from Lucide icons
 * @module
 */
export function LuChevronLast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 18 6-6-6-6"}},{tag:"path",attr:{d:"M17 6v12"},child:[]}]})(props);
}
export default LuChevronLast;
