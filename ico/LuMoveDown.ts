import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveDown icon from Lucide icons
 * @module
 */
export function LuMoveDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 18L12 22L16 18"}},{tag:"path",attr:{d:"M12 2V22"},child:[]}]})(props);
}
export default LuMoveDown;
