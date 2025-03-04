import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserRoundMinus icon from Lucide icons
 * @module
 */
export function LuUserRoundMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 21a8 8 0 0 1 13.292-6"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]},{tag:"path",attr:{d:"M22 19h-6"},child:[]}]})(props);
}
export default LuUserRoundMinus;
