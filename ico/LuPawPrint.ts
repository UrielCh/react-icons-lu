import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PawPrint icon from Lucide icons
 * @module
 */
export function LuPawPrint(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11","cy":"4","r":"2"}},{tag:"circle",attr:{"cx":"18","cy":"8","r":"2"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"},child:[]}]})(props);
}
export default LuPawPrint;
