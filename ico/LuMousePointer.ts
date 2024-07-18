import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MousePointer icon from Lucide icons
 * @module
 */
export function LuMousePointer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}},{tag:"path",attr:{d:"m13 13 6 6"},child:[]}]})(props);
}
export default LuMousePointer;
