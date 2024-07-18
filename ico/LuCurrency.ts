import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Currency icon from Lucide icons
 * @module
 */
export function LuCurrency(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"8"}},{tag:"line",attr:{"x1":"3","x2":"6","y1":"3","y2":"6"},child:[]},{tag:"line",attr:{"x1":"21","x2":"18","y1":"3","y2":"6"},child:[]},{tag:"line",attr:{"x1":"3","x2":"6","y1":"21","y2":"18"},child:[]},{tag:"line",attr:{"x1":"21","x2":"18","y1":"21","y2":"18"},child:[]}]})(props);
}
export default LuCurrency;
