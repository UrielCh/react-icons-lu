import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tablets icon from Lucide icons
 * @module
 */
export function LuTablets(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"7","cy":"7","r":"5"}},{tag:"circle",attr:{"cx":"17","cy":"17","r":"5"},child:[]},{tag:"path",attr:{d:"M12 17h10"},child:[]},{tag:"path",attr:{d:"m3.46 10.54 7.08-7.08"},child:[]}]})(props);
}
export default LuTablets;
