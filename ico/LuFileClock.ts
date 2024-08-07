import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileClock icon from Lucide icons
 * @module
 */
export function LuFileClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"16","r":"6"},child:[]},{tag:"path",attr:{d:"M9.5 17.5 8 16.25V14"},child:[]}]})(props);
}
export default LuFileClock;
