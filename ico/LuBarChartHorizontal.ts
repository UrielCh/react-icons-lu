import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChartHorizontal icon from Lucide icons
 * @module
 */
export function LuBarChartHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v18h18"}},{tag:"path",attr:{d:"M7 16h8"},child:[]},{tag:"path",attr:{d:"M7 11h12"},child:[]},{tag:"path",attr:{d:"M7 6h3"},child:[]}]})(props);
}
export default LuBarChartHorizontal;
