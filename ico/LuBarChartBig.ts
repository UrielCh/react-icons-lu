import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChartBig icon from Lucide icons
 * @module
 */
export function LuBarChartBig(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3v18h18"}},{tag:"rect",attr:{"width":"4","height":"7",x:"7",y:"10","rx":"1"},child:[]},{tag:"rect",attr:{"width":"4","height":"12",x:"15",y:"5","rx":"1"},child:[]}]})(props);
}
export default LuBarChartBig;
