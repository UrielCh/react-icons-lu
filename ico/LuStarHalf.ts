import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StarHalf icon from Lucide icons
 * @module
 */
export function LuStarHalf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"}}]})(props);
}
export default LuStarHalf;
