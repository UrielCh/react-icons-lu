import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SearchCode icon from Lucide icons
 * @module
 */
export function LuSearchCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m13 13.5 2-2.5-2-2.5"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]},{tag:"path",attr:{d:"M9 8.5 7 11l2 2.5"},child:[]},{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"},child:[]}]})(props);
}
export default LuSearchCode;
