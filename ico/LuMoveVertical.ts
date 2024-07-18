import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveVertical icon from Lucide icons
 * @module
 */
export function LuMoveVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"8 18 12 22 16 18"}},{tag:"polyline",attr:{"points":"8 6 12 2 16 6"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"22"},child:[]}]})(props);
}
export default LuMoveVertical;
