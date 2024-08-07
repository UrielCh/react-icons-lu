import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileLineChart icon from Lucide icons
 * @module
 */
export function LuFileLineChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"path",attr:{d:"m16 13-3.5 3.5-2-2L8 17"},child:[]}]})(props);
}
export default LuFileLineChart;
