import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownCircle icon from Lucide icons
 * @module
 */
export function LuArrowDownCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M12 8v8"},child:[]},{tag:"path",attr:{d:"m8 12 4 4 4-4"},child:[]}]})(props);
}
export default LuArrowDownCircle;
