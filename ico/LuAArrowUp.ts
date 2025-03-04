import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AArrowUp icon from Lucide icons
 * @module
 */
export function LuAArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.5 13h6"}},{tag:"path",attr:{d:"m2 16 4.5-9 4.5 9"},child:[]},{tag:"path",attr:{d:"M18 16V7"},child:[]},{tag:"path",attr:{d:"m14 11 4-4 4 4"},child:[]}]})(props);
}
export default LuAArrowUp;
