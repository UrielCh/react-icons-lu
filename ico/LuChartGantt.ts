import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChartGantt icon from Lucide icons
 * @module
 */
export function LuChartGantt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 6h8"}},{tag:"path",attr:{d:"M12 16h6"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]},{tag:"path",attr:{d:"M8 11h7"},child:[]}]})(props);
}
export default LuChartGantt;
