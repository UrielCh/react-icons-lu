import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBigLeft icon from Lucide icons
 * @module
 */
export function LuArrowBigLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}}]})(props);
}
export default LuArrowBigLeft;
