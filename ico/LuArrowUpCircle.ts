import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpCircle icon from Lucide icons
 * @module
 */
export function LuArrowUpCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"m16 12-4-4-4 4"},child:[]},{tag:"path",attr:{d:"M12 16V8"},child:[]}]})(props);
}
export default LuArrowUpCircle;
