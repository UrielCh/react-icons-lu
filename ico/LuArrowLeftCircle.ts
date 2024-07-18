import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftCircle icon from Lucide icons
 * @module
 */
export function LuArrowLeftCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M16 12H8"},child:[]},{tag:"path",attr:{d:"m12 8-4 4 4 4"},child:[]}]})(props);
}
export default LuArrowLeftCircle;
