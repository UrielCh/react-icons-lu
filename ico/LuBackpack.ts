import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Backpack icon from Lucide icons
 * @module
 */
export function LuBackpack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}},{tag:"path",attr:{d:"M8 10h8"},child:[]},{tag:"path",attr:{d:"M8 18h8"},child:[]},{tag:"path",attr:{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"},child:[]},{tag:"path",attr:{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"},child:[]}]})(props);
}
export default LuBackpack;
