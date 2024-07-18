import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShoppingBag icon from Lucide icons
 * @module
 */
export function LuShoppingBag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}},{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M16 10a4 4 0 0 1-8 0"},child:[]}]})(props);
}
export default LuShoppingBag;
