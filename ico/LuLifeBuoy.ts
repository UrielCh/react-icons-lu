import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LifeBuoy icon from Lucide icons
 * @module
 */
export function LuLifeBuoy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m4.93 4.93 4.24 4.24"},child:[]},{tag:"path",attr:{d:"m14.83 9.17 4.24-4.24"},child:[]},{tag:"path",attr:{d:"m14.83 14.83 4.24 4.24"},child:[]},{tag:"path",attr:{d:"m9.17 14.83-4.24 4.24"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"},child:[]}]})(props);
}
export default LuLifeBuoy;
