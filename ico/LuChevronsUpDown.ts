import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsUpDown icon from Lucide icons
 * @module
 */
export function LuChevronsUpDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 15 5 5 5-5"}},{tag:"path",attr:{d:"m7 9 5-5 5 5"},child:[]}]})(props);
}
export default LuChevronsUpDown;
