import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Scale3D icon from Lucide icons
 * @module
 */
export function LuScale3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 7v11a1 1 0 0 0 1 1h11"}},{tag:"path",attr:{d:"M5.293 18.707 11 13"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"19","r":"2"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"5","r":"2"},child:[]}]})(props);
}
export default LuScale3D;
