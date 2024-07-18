import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Axe icon from Lucide icons
 * @module
 */
export function LuAxe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}},{tag:"path",attr:{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"},child:[]}]})(props);
}
export default LuAxe;
