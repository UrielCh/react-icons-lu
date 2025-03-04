import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Anvil icon from Lucide icons
 * @module
 */
export function LuAnvil(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}},{tag:"path",attr:{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"},child:[]},{tag:"path",attr:{d:"M9 12v5"},child:[]},{tag:"path",attr:{d:"M15 12v5"},child:[]},{tag:"path",attr:{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"},child:[]}]})(props);
}
export default LuAnvil;
