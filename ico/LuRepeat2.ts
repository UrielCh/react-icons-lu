import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Repeat2 icon from Lucide icons
 * @module
 */
export function LuRepeat2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 9 3-3 3 3"}},{tag:"path",attr:{d:"M13 18H7a2 2 0 0 1-2-2V6"},child:[]},{tag:"path",attr:{d:"m22 15-3 3-3-3"},child:[]},{tag:"path",attr:{d:"M11 6h6a2 2 0 0 1 2 2v10"},child:[]}]})(props);
}
export default LuRepeat2;
