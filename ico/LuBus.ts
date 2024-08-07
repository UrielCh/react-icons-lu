import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bus icon from Lucide icons
 * @module
 */
export function LuBus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2"}},{tag:"path",attr:{d:"M14 17H9"},child:[]},{tag:"circle",attr:{"cx":"6.5","cy":"17.5","r":"2.5"},child:[]},{tag:"circle",attr:{"cx":"16.5","cy":"17.5","r":"2.5"},child:[]}]})(props);
}
export default LuBus;
