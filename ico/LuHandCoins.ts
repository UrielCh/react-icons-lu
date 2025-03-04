import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HandCoins icon from Lucide icons
 * @module
 */
export function LuHandCoins(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}},{tag:"path",attr:{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"},child:[]},{tag:"path",attr:{d:"m2 16 6 6"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"9","r":"2.9"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"5","r":"3"},child:[]}]})(props);
}
export default LuHandCoins;
