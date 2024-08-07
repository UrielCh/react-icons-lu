import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Medal icon from Lucide icons
 * @module
 */
export function LuMedal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}},{tag:"path",attr:{d:"M11 12 5.12 2.2"},child:[]},{tag:"path",attr:{d:"m13 12 5.88-9.8"},child:[]},{tag:"path",attr:{d:"M8 7h8"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"17","r":"5"},child:[]},{tag:"path",attr:{d:"M12 18v-2h-.5"},child:[]}]})(props);
}
export default LuMedal;
