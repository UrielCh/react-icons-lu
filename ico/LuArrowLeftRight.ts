import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftRight icon from Lucide icons
 * @module
 */
export function LuArrowLeftRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3 4 7l4 4"}},{tag:"path",attr:{d:"M4 7h16"},child:[]},{tag:"path",attr:{d:"m16 21 4-4-4-4"},child:[]},{tag:"path",attr:{d:"M20 17H4"},child:[]}]})(props);
}
export default LuArrowLeftRight;
