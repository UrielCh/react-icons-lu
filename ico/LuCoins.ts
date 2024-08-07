import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Coins icon from Lucide icons
 * @module
 */
export function LuCoins(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"8","cy":"8","r":"6"}},{tag:"path",attr:{d:"M18.09 10.37A6 6 0 1 1 10.34 18"},child:[]},{tag:"path",attr:{d:"M7 6h1v4"},child:[]},{tag:"path",attr:{d:"m16.71 13.88.7.71-2.82 2.82"},child:[]}]})(props);
}
export default LuCoins;
