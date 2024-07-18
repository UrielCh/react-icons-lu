import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LineChart icon from Lucide icons
 * @module
 */
export function LuLineChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v18h18"}},{tag:"path",attr:{d:"m19 9-5 5-4-4-3 3"},child:[]}]})(props);
}
export default LuLineChart;
