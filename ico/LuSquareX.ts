import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareX icon from Lucide icons
 * @module
 */
export function LuSquareX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"m9 9 6 6"},child:[]}]})(props);
}
export default LuSquareX;
