import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareLibrary icon from Lucide icons
 * @module
 */
export function LuSquareLibrary(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 7v10"},child:[]},{tag:"path",attr:{d:"M11 7v10"},child:[]},{tag:"path",attr:{d:"m15 7 2 10"},child:[]}]})(props);
}
export default LuSquareLibrary;
