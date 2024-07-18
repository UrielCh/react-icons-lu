import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CornerRightUp icon from Lucide icons
 * @module
 */
export function LuCornerRightUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"10 9 15 4 20 9"}},{tag:"path",attr:{d:"M4 20h7a4 4 0 0 0 4-4V4"},child:[]}]})(props);
}
export default LuCornerRightUp;
