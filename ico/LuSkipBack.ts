import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipBack icon from Lucide icons
 * @module
 */
export function LuSkipBack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"19 20 9 12 19 4 19 20"}},{tag:"line",attr:{"x1":"5","x2":"5","y1":"19","y2":"5"},child:[]}]})(props);
}
export default LuSkipBack;
