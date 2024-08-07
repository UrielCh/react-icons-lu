import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarRange icon from Lucide icons
 * @module
 */
export function LuCalendarRange(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"16","x2":"16","y1":"2","y2":"6"},child:[]},{tag:"line",attr:{"x1":"8","x2":"8","y1":"2","y2":"6"},child:[]},{tag:"line",attr:{"x1":"3","x2":"21","y1":"10","y2":"10"},child:[]},{tag:"path",attr:{d:"M17 14h-6"},child:[]},{tag:"path",attr:{d:"M13 18H7"},child:[]},{tag:"path",attr:{d:"M7 14h.01"},child:[]},{tag:"path",attr:{d:"M17 18h.01"},child:[]}]})(props);
}
export default LuCalendarRange;
