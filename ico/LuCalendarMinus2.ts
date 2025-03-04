import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarMinus2 icon from Lucide icons
 * @module
 */
export function LuCalendarMinus2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M10 16h4"},child:[]}]})(props);
}
export default LuCalendarMinus2;
