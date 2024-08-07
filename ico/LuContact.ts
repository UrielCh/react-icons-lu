import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Contact icon from Lucide icons
 * @module
 */
export function LuContact(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"}},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"4","rx":"2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"10","r":"2"},child:[]},{tag:"line",attr:{"x1":"8","x2":"8","y1":"2","y2":"4"},child:[]},{tag:"line",attr:{"x1":"16","x2":"16","y1":"2","y2":"4"},child:[]}]})(props);
}
export default LuContact;
