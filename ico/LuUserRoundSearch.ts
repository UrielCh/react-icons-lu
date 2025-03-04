import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserRoundSearch icon from Lucide icons
 * @module
 */
export function LuUserRoundSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"}},{tag:"path",attr:{d:"M2 21a8 8 0 0 1 10.434-7.62"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"m22 22-1.9-1.9"},child:[]}]})(props);
}
export default LuUserRoundSearch;
