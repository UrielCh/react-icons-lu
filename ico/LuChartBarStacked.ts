import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChartBarStacked icon from Lucide icons
 * @module
 */
export function LuChartBarStacked(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 13v4"}},{tag:"path",attr:{d:"M15 5v4"},child:[]},{tag:"path",attr:{d:"M3 3v16a2 2 0 0 0 2 2h16"},child:[]},{tag:"rect",attr:{x:"7",y:"13","width":"9","height":"4","rx":"1"},child:[]},{tag:"rect",attr:{x:"7",y:"5","width":"12","height":"4","rx":"1"},child:[]}]})(props);
}
export default LuChartBarStacked;
