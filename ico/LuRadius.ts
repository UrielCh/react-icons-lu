import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Radius icon from Lucide icons
 * @module
 */
export function LuRadius(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}},{tag:"circle",attr:{"cx":"19","cy":"19","r":"2"},child:[]},{tag:"path",attr:{d:"m13.41 13.41 4.18 4.18"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]}]})(props);
}
export default LuRadius;
