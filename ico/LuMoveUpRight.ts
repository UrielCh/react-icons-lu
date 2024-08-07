import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveUpRight icon from Lucide icons
 * @module
 */
export function LuMoveUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 5H19V11"}},{tag:"path",attr:{d:"M19 5L5 19"},child:[]}]})(props);
}
export default LuMoveUpRight;
