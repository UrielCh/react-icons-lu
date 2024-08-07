import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleDollarSign icon from Lucide icons
 * @module
 */
export function LuCircleDollarSign(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]}]})(props);
}
export default LuCircleDollarSign;
