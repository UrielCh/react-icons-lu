import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BookLock icon from Lucide icons
 * @module
 */
export function LuBookLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}},{tag:"path",attr:{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"},child:[]},{tag:"rect",attr:{"width":"8","height":"5",x:"12",y:"6","rx":"1"},child:[]},{tag:"path",attr:{d:"M18 6V4a2 2 0 1 0-4 0v2"},child:[]}]})(props);
}
export default LuBookLock;
