import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Accessibility icon from Lucide icons
 * @module
 */
export function LuAccessibility(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"16","cy":"4","r":"1"}},{tag:"path",attr:{d:"m18 19 1-7-6 1"},child:[]},{tag:"path",attr:{d:"m5 8 3-3 5.5 3-2.36 3.5"},child:[]},{tag:"path",attr:{d:"M4.24 14.5a5 5 0 0 0 6.88 6"},child:[]},{tag:"path",attr:{d:"M13.76 17.5a5 5 0 0 0-6.88-6"},child:[]}]})(props);
}
export default LuAccessibility;
