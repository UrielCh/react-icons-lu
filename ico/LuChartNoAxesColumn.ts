import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChartNoAxesColumn icon from Lucide icons
 * @module
 */
export function LuChartNoAxesColumn(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"18","x2":"18","y1":"20","y2":"10"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"20","y2":"4"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"20","y2":"14"},child:[]}]})(props);
}
export default LuChartNoAxesColumn;
