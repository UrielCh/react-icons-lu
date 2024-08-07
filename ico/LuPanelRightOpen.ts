import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PanelRightOpen icon from Lucide icons
 * @module
 */
export function LuPanelRightOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"15","x2":"15","y1":"3","y2":"21"},child:[]},{tag:"path",attr:{d:"m10 15-3-3 3-3"},child:[]}]})(props);
}
export default LuPanelRightOpen;
