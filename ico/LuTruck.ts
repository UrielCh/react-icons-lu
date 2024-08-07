import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Truck icon from Lucide icons
 * @module
 */
export function LuTruck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 17h4V5H2v12h3"}},{tag:"path",attr:{d:"M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"},child:[]},{tag:"path",attr:{d:"M14 17h1"},child:[]},{tag:"circle",attr:{"cx":"7.5","cy":"17.5","r":"2.5"},child:[]},{tag:"circle",attr:{"cx":"17.5","cy":"17.5","r":"2.5"},child:[]}]})(props);
}
export default LuTruck;
