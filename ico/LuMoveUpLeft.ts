import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveUpLeft icon from Lucide icons
 * @module
 */
export function LuMoveUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 11V5H11"}},{tag:"path",attr:{d:"M5 5L19 19"},child:[]}]})(props);
}
export default LuMoveUpLeft;
