import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * IndentDecrease icon from Lucide icons
 * @module
 */
export function LuIndentDecrease(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12H11"}},{tag:"path",attr:{d:"M21 18H11"},child:[]},{tag:"path",attr:{d:"M21 6H11"},child:[]},{tag:"path",attr:{d:"m7 8-4 4 4 4"},child:[]}]})(props);
}
export default LuIndentDecrease;
