import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Calendar1 icon from Lucide icons
 * @module
 */
export function LuCalendar1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 14h1v4"}},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"rect",attr:{x:"3",y:"4","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
export default LuCalendar1;
