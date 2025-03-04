import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareCode icon from Lucide icons
 * @module
 */
export function LuSquareCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 9.5 8 12l2 2.5"}},{tag:"path",attr:{d:"m14 9.5 2 2.5-2 2.5"},child:[]},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"},child:[]}]})(props);
}
export default LuSquareCode;
