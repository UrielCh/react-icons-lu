import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleArrowOutDownLeft icon from Lucide icons
 * @module
 */
export function LuCircleArrowOutDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12a10 10 0 1 1 10 10"}},{tag:"path",attr:{d:"m2 22 10-10"},child:[]},{tag:"path",attr:{d:"M8 22H2v-6"},child:[]}]})(props);
}
export default LuCircleArrowOutDownLeft;
