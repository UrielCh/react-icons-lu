import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarX icon from Lucide icons
 * @module
 */
export function LuCalendarX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"m14 14-4 4"},child:[]},{tag:"path",attr:{d:"m10 14 4 4"},child:[]}]})(props);
}
export default LuCalendarX;
