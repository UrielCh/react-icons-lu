import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SeparatorVertical icon from Lucide icons
 * @module
 */
export function LuSeparatorVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","x2":"12","y1":"3","y2":"21"}},{tag:"polyline",attr:{"points":"8 8 4 12 8 16"},child:[]},{tag:"polyline",attr:{"points":"16 16 20 12 16 8"},child:[]}]})(props);
}
export default LuSeparatorVertical;
