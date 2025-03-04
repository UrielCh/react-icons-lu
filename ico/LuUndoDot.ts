import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UndoDot icon from Lucide icons
 * @module
 */
export function LuUndoDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 17a9 9 0 0 0-15-6.7L3 13"}},{tag:"path",attr:{d:"M3 7v6h6"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"17","r":"1"},child:[]}]})(props);
}
export default LuUndoDot;
