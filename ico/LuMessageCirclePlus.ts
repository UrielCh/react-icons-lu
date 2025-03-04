import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MessageCirclePlus icon from Lucide icons
 * @module
 */
export function LuMessageCirclePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"M12 8v8"},child:[]}]})(props);
}
export default LuMessageCirclePlus;
