import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownUp icon from Lucide icons
 * @module
 */
export function LuArrowDownUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 16 4 4 4-4"}},{tag:"path",attr:{d:"M7 20V4"},child:[]},{tag:"path",attr:{d:"m21 8-4-4-4 4"},child:[]},{tag:"path",attr:{d:"M17 4v16"},child:[]}]})(props);
}
export default LuArrowDownUp;
