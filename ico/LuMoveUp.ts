import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveUp icon from Lucide icons
 * @module
 */
export function LuMoveUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 6L12 2L16 6"}},{tag:"path",attr:{d:"M12 2V22"},child:[]}]})(props);
}
export default LuMoveUp;
