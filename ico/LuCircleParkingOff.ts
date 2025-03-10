import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleParkingOff icon from Lucide icons
 * @module
 */
export function LuCircleParkingOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m5 5 14 14"},child:[]},{tag:"path",attr:{d:"M13 13a3 3 0 1 0 0-6H9v2"},child:[]},{tag:"path",attr:{d:"M9 17v-2.34"},child:[]}]})(props);
}
export default LuCircleParkingOff;
