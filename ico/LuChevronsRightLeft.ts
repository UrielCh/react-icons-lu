import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsRightLeft icon from Lucide icons
 * @module
 */
export function LuChevronsRightLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m20 17-5-5 5-5"}},{tag:"path",attr:{d:"m4 17 5-5-5-5"},child:[]}]})(props);
}
export default LuChevronsRightLeft;
