import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarX2 icon from Lucide icons
 * @module
 */
export function LuCalendarX2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}},{tag:"line",attr:{"x1":"16","x2":"16","y1":"2","y2":"6"},child:[]},{tag:"line",attr:{"x1":"8","x2":"8","y1":"2","y2":"6"},child:[]},{tag:"line",attr:{"x1":"3","x2":"21","y1":"10","y2":"10"},child:[]},{tag:"line",attr:{"x1":"17","x2":"22","y1":"17","y2":"22"},child:[]},{tag:"line",attr:{"x1":"17","x2":"22","y1":"22","y2":"17"},child:[]}]})(props);
}
export default LuCalendarX2;
