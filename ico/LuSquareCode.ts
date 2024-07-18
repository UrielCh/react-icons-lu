import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareCode icon from Lucide icons
 * @module
 */
export function LuSquareCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"m10 10-2 2 2 2"},child:[]},{tag:"path",attr:{d:"m14 14 2-2-2-2"},child:[]}]})(props);
}
export default LuSquareCode;
