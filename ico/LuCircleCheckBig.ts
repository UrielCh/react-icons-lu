import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleCheckBig icon from Lucide icons
 * @module
 */
export function LuCircleCheckBig(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attr:{d:"m9 11 3 3L22 4"},child:[]}]})(props);
}
export default LuCircleCheckBig;
