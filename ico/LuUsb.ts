import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Usb icon from Lucide icons
 * @module
 */
export function LuUsb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"10","cy":"7","r":"1"}},{tag:"circle",attr:{"cx":"4","cy":"20","r":"1"},child:[]},{tag:"path",attr:{d:"M4.7 19.3 19 5"},child:[]},{tag:"path",attr:{d:"m21 3-3 1 2 2Z"},child:[]},{tag:"path",attr:{d:"M9.26 7.68 5 12l2 5"},child:[]},{tag:"path",attr:{d:"m10 14 5 2 3.5-3.5"},child:[]},{tag:"path",attr:{d:"m18 12 1-1 1 1-1 1Z"},child:[]}]})(props);
}
export default LuUsb;
