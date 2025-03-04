import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveVertical icon from Lucide icons
 * @module
 */
export function LuMoveVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v20"}},{tag:"path",attr:{d:"m8 18 4 4 4-4"},child:[]},{tag:"path",attr:{d:"m8 6 4-4 4 4"},child:[]}]})(props);
}
export default LuMoveVertical;
