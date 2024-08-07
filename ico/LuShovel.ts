import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shovel icon from Lucide icons
 * @module
 */
export function LuShovel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 22v-5l5-5 5 5-5 5z"}},{tag:"path",attr:{d:"M9.5 14.5 16 8"},child:[]},{tag:"path",attr:{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"},child:[]}]})(props);
}
export default LuShovel;
