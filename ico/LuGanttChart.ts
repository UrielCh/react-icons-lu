import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuGanttChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 6h10"}},{tag:"path",attr:{d:"M6 12h9"},child:[]},{tag:"path",attr:{d:"M11 18h7"},child:[]}]})(props);
}
export default LuGanttChart;
