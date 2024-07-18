import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Armchair icon from Lucide icons
 * @module
 */
export function LuArmchair(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"},child:[]},{tag:"path",attr:{d:"M5 18v2"},child:[]},{tag:"path",attr:{d:"M19 18v2"},child:[]}]})(props);
}
export default LuArmchair;
