import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gamepad icon from Lucide icons
 * @module
 */
export function LuGamepad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"6","x2":"10","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"8","x2":"8","y1":"10","y2":"14"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15.01","y1":"13","y2":"13"},child:[]},{tag:"line",attr:{"x1":"18","x2":"18.01","y1":"11","y2":"11"},child:[]},{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"2"},child:[]}]})(props);
}
export default LuGamepad;
