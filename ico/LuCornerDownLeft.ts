import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CornerDownLeft icon from Lucide icons
 * @module
 */
export function LuCornerDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"9 10 4 15 9 20"}},{tag:"path",attr:{d:"M20 4v7a4 4 0 0 1-4 4H4"},child:[]}]})(props);
}
export default LuCornerDownLeft;
