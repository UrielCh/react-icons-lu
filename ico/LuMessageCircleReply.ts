import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MessageCircleReply icon from Lucide icons
 * @module
 */
export function LuMessageCircleReply(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}},{tag:"path",attr:{d:"m10 15-3-3 3-3"},child:[]},{tag:"path",attr:{d:"M7 12h7a2 2 0 0 1 2 2v1"},child:[]}]})(props);
}
export default LuMessageCircleReply;
