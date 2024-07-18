import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Wallet icon from Lucide icons
 * @module
 */
export function LuWallet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}},{tag:"path",attr:{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"},child:[]},{tag:"path",attr:{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"},child:[]}]})(props);
}
export default LuWallet;
