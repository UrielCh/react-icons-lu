import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TrendingUpDown icon from Lucide icons
 * @module
 */
export function LuTrendingUpDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.828 14.828 21 21"}},{tag:"path",attr:{d:"M21 16v5h-5"},child:[]},{tag:"path",attr:{d:"m21 3-9 9-4-4-6 6"},child:[]},{tag:"path",attr:{d:"M21 8V3h-5"},child:[]}]})(props);
}
export default LuTrendingUpDown;
