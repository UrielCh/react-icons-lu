import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Layout icon from Lucide icons
 * @module
 */
export function LuLayout(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"3","x2":"21","y1":"9","y2":"9"},child:[]},{tag:"line",attr:{"x1":"9","x2":"9","y1":"21","y2":"9"},child:[]}]})(props);
}
export default LuLayout;
