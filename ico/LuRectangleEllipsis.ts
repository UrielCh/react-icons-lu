import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RectangleEllipsis icon from Lucide icons
 * @module
 */
export function LuRectangleEllipsis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"2"}},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M17 12h.01"},child:[]},{tag:"path",attr:{d:"M7 12h.01"},child:[]}]})(props);
}
export default LuRectangleEllipsis;
