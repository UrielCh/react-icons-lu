import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareUserRound icon from Lucide icons
 * @module
 */
export function LuSquareUserRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 21a6 6 0 0 0-12 0"}},{tag:"circle",attr:{"cx":"12","cy":"11","r":"4"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"},child:[]}]})(props);
}
export default LuSquareUserRound;
