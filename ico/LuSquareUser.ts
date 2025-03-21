import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareUser icon from Lucide icons
 * @module
 */
export function LuSquareUser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"},child:[]}]})(props);
}
export default LuSquareUser;
