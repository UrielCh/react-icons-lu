import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Underline icon from Lucide icons
 * @module
 */
export function LuUnderline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 4v6a6 6 0 0 0 12 0V4"}},{tag:"line",attr:{"x1":"4","x2":"20","y1":"20","y2":"20"},child:[]}]})(props);
}
export default LuUnderline;
