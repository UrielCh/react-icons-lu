import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ellipsis icon from Lucide icons
 * @module
 */
export function LuEllipsis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"}},{tag:"circle",attr:{"cx":"19","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"12","r":"1"},child:[]}]})(props);
}
export default LuEllipsis;
