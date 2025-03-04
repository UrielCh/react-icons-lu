import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveHorizontal icon from Lucide icons
 * @module
 */
export function LuMoveHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 8 4 4-4 4"}},{tag:"path",attr:{d:"M2 12h20"},child:[]},{tag:"path",attr:{d:"m6 8-4 4 4 4"},child:[]}]})(props);
}
export default LuMoveHorizontal;
