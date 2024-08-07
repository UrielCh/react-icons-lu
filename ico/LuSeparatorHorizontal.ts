import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SeparatorHorizontal icon from Lucide icons
 * @module
 */
export function LuSeparatorHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"21","y1":"12","y2":"12"}},{tag:"polyline",attr:{"points":"8 8 12 4 16 8"},child:[]},{tag:"polyline",attr:{"points":"16 16 12 20 8 16"},child:[]}]})(props);
}
export default LuSeparatorHorizontal;
