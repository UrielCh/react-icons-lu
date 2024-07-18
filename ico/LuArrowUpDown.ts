import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpDown icon from Lucide icons
 * @module
 */
export function LuArrowUpDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21 16-4 4-4-4"}},{tag:"path",attr:{d:"M17 20V4"},child:[]},{tag:"path",attr:{d:"m3 8 4-4 4 4"},child:[]},{tag:"path",attr:{d:"M7 4v16"},child:[]}]})(props);
}
export default LuArrowUpDown;
