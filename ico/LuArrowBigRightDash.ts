import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBigRightDash icon from Lucide icons
 * @module
 */
export function LuArrowBigRightDash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 9v6"}},{tag:"path",attr:{d:"M9 9h3V5l7 7-7 7v-4H9V9z"},child:[]}]})(props);
}
export default LuArrowBigRightDash;
