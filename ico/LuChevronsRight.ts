import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsRight icon from Lucide icons
 * @module
 */
export function LuChevronsRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 17 5-5-5-5"}},{tag:"path",attr:{d:"m13 17 5-5-5-5"},child:[]}]})(props);
}
export default LuChevronsRight;
