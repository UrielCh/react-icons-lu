import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftSquare icon from Lucide icons
 * @module
 */
export function LuArrowLeftSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m12 8-4 4 4 4"},child:[]},{tag:"path",attr:{d:"M16 12H8"},child:[]}]})(props);
}
export default LuArrowLeftSquare;
