import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MessageCircle icon from Lucide icons
 * @module
 */
export function LuMessageCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"}}]})(props);
}
export default LuMessageCircle;
