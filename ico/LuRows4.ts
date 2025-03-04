import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rows4 icon from Lucide icons
 * @module
 */
export function LuRows4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M21 7.5H3"},child:[]},{tag:"path",attr:{d:"M21 12H3"},child:[]},{tag:"path",attr:{d:"M21 16.5H3"},child:[]}]})(props);
}
export default LuRows4;
