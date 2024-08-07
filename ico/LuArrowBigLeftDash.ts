import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBigLeftDash icon from Lucide icons
 * @module
 */
export function LuArrowBigLeftDash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 15V9"}},{tag:"path",attr:{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"},child:[]}]})(props);
}
export default LuArrowBigLeftDash;
