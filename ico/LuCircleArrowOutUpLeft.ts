import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleArrowOutUpLeft icon from Lucide icons
 * @module
 */
export function LuCircleArrowOutUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 8V2h6"}},{tag:"path",attr:{d:"m2 2 10 10"},child:[]},{tag:"path",attr:{d:"M12 2A10 10 0 1 1 2 12"},child:[]}]})(props);
}
export default LuCircleArrowOutUpLeft;
