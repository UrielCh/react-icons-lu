import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBigUpDash icon from Lucide icons
 * @module
 */
export function LuArrowBigUpDash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19h6"}},{tag:"path",attr:{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"},child:[]}]})(props);
}
export default LuArrowBigUpDash;
