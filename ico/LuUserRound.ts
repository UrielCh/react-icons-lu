import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserRound icon from Lucide icons
 * @module
 */
export function LuUserRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"8","r":"5"}},{tag:"path",attr:{d:"M20 21a8 8 0 0 0-16 0"},child:[]}]})(props);
}
export default LuUserRound;
