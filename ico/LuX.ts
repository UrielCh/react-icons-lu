import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * X icon from Lucide icons
 * @module
 */
export function LuX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"}},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(props);
}
export default LuX;
