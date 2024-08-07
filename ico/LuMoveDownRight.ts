import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveDownRight icon from Lucide icons
 * @module
 */
export function LuMoveDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 13V19H13"}},{tag:"path",attr:{d:"M5 5L19 19"},child:[]}]})(props);
}
export default LuMoveDownRight;
