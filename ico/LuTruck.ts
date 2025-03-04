import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Truck icon from Lucide icons
 * @module
 */
export function LuTruck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}},{tag:"path",attr:{d:"M15 18H9"},child:[]},{tag:"path",attr:{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"18","r":"2"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"18","r":"2"},child:[]}]})(props);
}
export default LuTruck;
