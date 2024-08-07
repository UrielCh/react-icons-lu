import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShoppingCart icon from Lucide icons
 * @module
 */
export function LuShoppingCart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"8","cy":"21","r":"1"}},{tag:"circle",attr:{"cx":"19","cy":"21","r":"1"},child:[]},{tag:"path",attr:{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"},child:[]}]})(props);
}
export default LuShoppingCart;
