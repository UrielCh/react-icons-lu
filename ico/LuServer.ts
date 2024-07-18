import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Server icon from Lucide icons
 * @module
 */
export function LuServer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"2","rx":"2","ry":"2"}},{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"14","rx":"2","ry":"2"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6.01","y1":"6","y2":"6"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6.01","y1":"18","y2":"18"},child:[]}]})(props);
}
export default LuServer;
