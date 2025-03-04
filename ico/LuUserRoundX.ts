import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserRoundX icon from Lucide icons
 * @module
 */
export function LuUserRoundX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 21a8 8 0 0 1 11.873-7"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]},{tag:"path",attr:{d:"m17 17 5 5"},child:[]},{tag:"path",attr:{d:"m22 17-5 5"},child:[]}]})(props);
}
export default LuUserRoundX;
