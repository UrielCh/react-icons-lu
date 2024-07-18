import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Send icon from Lucide icons
 * @module
 */
export function LuSend(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m22 2-7 20-4-9-9-4Z"}},{tag:"path",attr:{d:"M22 2 11 13"},child:[]}]})(props);
}
export default LuSend;
