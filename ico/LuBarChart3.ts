import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChart3 icon from Lucide icons
 * @module
 */
export function LuBarChart3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v18h18"}},{tag:"path",attr:{d:"M18 17V9"},child:[]},{tag:"path",attr:{d:"M13 17V5"},child:[]},{tag:"path",attr:{d:"M8 17v-3"},child:[]}]})(props);
}
export default LuBarChart3;
