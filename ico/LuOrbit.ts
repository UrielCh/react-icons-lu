import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Orbit icon from Lucide icons
 * @module
 */
export function LuOrbit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"}},{tag:"circle",attr:{"cx":"19","cy":"5","r":"2"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"19","r":"2"},child:[]},{tag:"path",attr:{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"},child:[]},{tag:"path",attr:{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"},child:[]}]})(props);
}
export default LuOrbit;
