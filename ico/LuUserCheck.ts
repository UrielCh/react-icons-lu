import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserCheck icon from Lucide icons
 * @module
 */
export function LuUserCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{"cx":"9","cy":"7","r":"4"},child:[]},{tag:"polyline",attr:{"points":"16 11 18 13 22 9"},child:[]}]})(props);
}
export default LuUserCheck;
