import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarSearch icon from Lucide icons
 * @module
 */
export function LuCalendarSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 2v4"}},{tag:"path",attr:{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"},child:[]},{tag:"path",attr:{d:"m22 22-1.875-1.875"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"},child:[]}]})(props);
}
export default LuCalendarSearch;
