import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Handshake icon from Lucide icons
 * @module
 */
export function LuHandshake(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m11 17 2 2a1 1 0 1 0 3-3"}},{tag:"path",attr:{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"},child:[]},{tag:"path",attr:{d:"m21 3 1 11h-2"},child:[]},{tag:"path",attr:{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"},child:[]},{tag:"path",attr:{d:"M3 4h8"},child:[]}]})(props);
}
export default LuHandshake;
