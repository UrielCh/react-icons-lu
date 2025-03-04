import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareSquare icon from Lucide icons
 * @module
 */
export function LuSquareSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2"}},{tag:"rect",attr:{x:"8",y:"8","width":"8","height":"8","rx":"1"},child:[]}]})(props);
}
export default LuSquareSquare;
