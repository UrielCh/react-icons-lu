import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircuitBoard icon from Lucide icons
 * @module
 */
export function LuCircuitBoard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M11 9h4a2 2 0 0 0 2-2V3"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]},{tag:"path",attr:{d:"M7 21v-4a2 2 0 0 1 2-2h4"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"15","r":"2"},child:[]}]})(props);
}
export default LuCircuitBoard;
