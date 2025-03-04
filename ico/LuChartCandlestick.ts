import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChartCandlestick icon from Lucide icons
 * @module
 */
export function LuChartCandlestick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 5v4"}},{tag:"rect",attr:{"width":"4","height":"6",x:"7",y:"9","rx":"1"},child:[]},{tag:"path",attr:{d:"M9 15v2"},child:[]},{tag:"path",attr:{d:"M17 3v2"},child:[]},{tag:"rect",attr:{"width":"4","height":"8",x:"15",y:"5","rx":"1"},child:[]},{tag:"path",attr:{d:"M17 13v3"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]}]})(props);
}
export default LuChartCandlestick;
