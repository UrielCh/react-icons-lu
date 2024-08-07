import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pilcrow icon from Lucide icons
 * @module
 */
export function LuPilcrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 4v16"}},{tag:"path",attr:{d:"M17 4v16"},child:[]},{tag:"path",attr:{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"},child:[]}]})(props);
}
export default LuPilcrow;
