import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ContactRound icon from Lucide icons
 * @module
 */
export function LuContactRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 2v2"}},{tag:"path",attr:{d:"M17.915 22a6 6 0 0 0-12 0"},child:[]},{tag:"path",attr:{d:"M8 2v2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"},child:[]},{tag:"rect",attr:{x:"3",y:"4","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
export default LuContactRound;
