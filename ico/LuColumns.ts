import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Columns icon from Lucide icons
 * @module
 */
export function LuColumns(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"3","y2":"21"},child:[]}]})(props);
}
export default LuColumns;
