import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleOff icon from Lucide icons
 * @module
 */
export function LuCircleOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 2 20 20"}},{tag:"path",attr:{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"},child:[]},{tag:"path",attr:{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"},child:[]}]})(props);
}
export default LuCircleOff;
