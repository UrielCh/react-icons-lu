import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CaseSensitive icon from Lucide icons
 * @module
 */
export function LuCaseSensitive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 15 4-8 4 8"}},{tag:"path",attr:{d:"M4 13h6"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"M21 9v6"},child:[]}]})(props);
}
export default LuCaseSensitive;
