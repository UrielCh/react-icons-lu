import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleArrowOutDownRight icon from Lucide icons
 * @module
 */
export function LuCircleArrowOutDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22a10 10 0 1 1 10-10"}},{tag:"path",attr:{d:"M22 22 12 12"},child:[]},{tag:"path",attr:{d:"M22 16v6h-6"},child:[]}]})(props);
}
export default LuCircleArrowOutDownRight;
