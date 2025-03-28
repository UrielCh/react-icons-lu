import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareScissors icon from Lucide icons
 * @module
 */
export function LuSquareScissors(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"20",x:"2",y:"2","rx":"2"}},{tag:"circle",attr:{"cx":"8","cy":"8","r":"2"},child:[]},{tag:"path",attr:{d:"M9.414 9.414 12 12"},child:[]},{tag:"path",attr:{d:"M14.8 14.8 18 18"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"m18 6-8.586 8.586"},child:[]}]})(props);
}
export default LuSquareScissors;
