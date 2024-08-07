import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Power icon from Lucide icons
 * @module
 */
export function LuPower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"12"},child:[]}]})(props);
}
export default LuPower;
