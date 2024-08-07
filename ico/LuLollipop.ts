import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lollipop icon from Lucide icons
 * @module
 */
export function LuLollipop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]},{tag:"path",attr:{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"},child:[]}]})(props);
}
export default LuLollipop;
