import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LampWallUp icon from Lucide icons
 * @module
 */
export function LuLampWallUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4h6l3 7H8l3-7Z"}},{tag:"path",attr:{d:"M14 11v5a2 2 0 0 1-2 2H8"},child:[]},{tag:"path",attr:{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"},child:[]}]})(props);
}
export default LuLampWallUp;
