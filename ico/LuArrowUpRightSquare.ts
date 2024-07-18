import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpRightSquare icon from Lucide icons
 * @module
 */
export function LuArrowUpRightSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 8h8v8"},child:[]},{tag:"path",attr:{d:"m8 16 8-8"},child:[]}]})(props);
}
export default LuArrowUpRightSquare;
