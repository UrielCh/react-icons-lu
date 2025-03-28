import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleArrowOutUpRight icon from Lucide icons
 * @module
 */
export function LuCircleArrowOutUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12A10 10 0 1 1 12 2"}},{tag:"path",attr:{d:"M22 2 12 12"},child:[]},{tag:"path",attr:{d:"M16 2h6v6"},child:[]}]})(props);
}
export default LuCircleArrowOutUpRight;
