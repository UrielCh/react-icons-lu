import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hash icon from Lucide icons
 * @module
 */
export function LuHash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"4","x2":"20","y1":"9","y2":"9"}},{tag:"line",attr:{"x1":"4","x2":"20","y1":"15","y2":"15"},child:[]},{tag:"line",attr:{"x1":"10","x2":"8","y1":"3","y2":"21"},child:[]},{tag:"line",attr:{"x1":"16","x2":"14","y1":"3","y2":"21"},child:[]}]})(props);
}
export default LuHash;
