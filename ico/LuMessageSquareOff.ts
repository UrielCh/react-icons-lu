import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MessageSquareOff icon from Lucide icons
 * @module
 */
export function LuMessageSquareOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15V5a2 2 0 0 0-2-2H9"}},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"},child:[]}]})(props);
}
export default LuMessageSquareOff;
