import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bus icon from Lucide icons
 * @module
 */
export function LuBus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 6v6"}},{tag:"path",attr:{d:"M15 6v6"},child:[]},{tag:"path",attr:{d:"M2 12h19.6"},child:[]},{tag:"path",attr:{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"18","r":"2"},child:[]},{tag:"path",attr:{d:"M9 18h5"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"18","r":"2"},child:[]}]})(props);
}
export default LuBus;
