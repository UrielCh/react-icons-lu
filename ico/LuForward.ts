import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Forward icon from Lucide icons
 * @module
 */
export function LuForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"15 17 20 12 15 7"}},{tag:"path",attr:{d:"M4 18v-2a4 4 0 0 1 4-4h12"},child:[]}]})(props);
}
export default LuForward;
