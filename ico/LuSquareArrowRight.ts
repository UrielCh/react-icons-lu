import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareArrowRight icon from Lucide icons
 * @module
 */
export function LuSquareArrowRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"m12 16 4-4-4-4"},child:[]}]})(props);
}
export default LuSquareArrowRight;
