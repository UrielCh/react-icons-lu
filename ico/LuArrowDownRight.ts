import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownRight icon from Lucide icons
 * @module
 */
export function LuArrowDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 7 10 10"}},{tag:"path",attr:{d:"M17 7v10H7"},child:[]}]})(props);
}
export default LuArrowDownRight;
