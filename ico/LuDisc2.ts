import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Disc2 icon from Lucide icons
 * @module
 */
export function LuDisc2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"},child:[]},{tag:"path",attr:{d:"M12 12h.01"},child:[]}]})(props);
}
export default LuDisc2;
