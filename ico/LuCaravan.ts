import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Caravan icon from Lucide icons
 * @module
 */
export function LuCaravan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}},{tag:"path",attr:{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"},child:[]},{tag:"path",attr:{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"19","r":"2"},child:[]}]})(props);
}
export default LuCaravan;
