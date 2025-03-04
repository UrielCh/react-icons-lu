import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignRight icon from Lucide icons
 * @module
 */
export function LuAlignRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12H9"}},{tag:"path",attr:{d:"M21 18H7"},child:[]},{tag:"path",attr:{d:"M21 6H3"},child:[]}]})(props);
}
export default LuAlignRight;
