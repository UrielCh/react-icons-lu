import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CopyX icon from Lucide icons
 * @module
 */
export function LuCopyX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","x2":"18","y1":"12","y2":"18"}},{tag:"line",attr:{"x1":"12","x2":"18","y1":"18","y2":"12"},child:[]},{tag:"rect",attr:{"width":"14","height":"14",x:"8",y:"8","rx":"2","ry":"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(props);
}
export default LuCopyX;
