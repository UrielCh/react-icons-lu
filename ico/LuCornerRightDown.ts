import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CornerRightDown icon from Lucide icons
 * @module
 */
export function LuCornerRightDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"10 15 15 20 20 15"}},{tag:"path",attr:{d:"M4 4h7a4 4 0 0 1 4 4v12"},child:[]}]})(props);
}
export default LuCornerRightDown;
