import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * XCircle icon from Lucide icons
 * @module
 */
export function LuXCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"m9 9 6 6"},child:[]}]})(props);
}
export default LuXCircle;
