import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownLeftSquare icon from Lucide icons
 * @module
 */
export function LuArrowDownLeftSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m16 8-8 8"},child:[]},{tag:"path",attr:{d:"M16 16H8V8"},child:[]}]})(props);
}
export default LuArrowDownLeftSquare;
