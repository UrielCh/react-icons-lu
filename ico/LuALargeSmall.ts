import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ALargeSmall icon from Lucide icons
 * @module
 */
export function LuALargeSmall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 14h-5"}},{tag:"path",attr:{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"},child:[]},{tag:"path",attr:{d:"M4.5 13h6"},child:[]},{tag:"path",attr:{d:"m3 16 4.5-9 4.5 9"},child:[]}]})(props);
}
export default LuALargeSmall;
