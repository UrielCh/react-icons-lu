import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BellDot icon from Lucide icons
 * @module
 */
export function LuBellDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"}},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"8","r":"3"},child:[]}]})(props);
}
export default LuBellDot;
