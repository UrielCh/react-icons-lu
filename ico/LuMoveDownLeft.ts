import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveDownLeft icon from Lucide icons
 * @module
 */
export function LuMoveDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 19H5V13"}},{tag:"path",attr:{d:"M19 5L5 19"},child:[]}]})(props);
}
export default LuMoveDownLeft;
