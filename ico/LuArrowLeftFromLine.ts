import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftFromLine icon from Lucide icons
 * @module
 */
export function LuArrowLeftFromLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 6-6 6 6 6"}},{tag:"path",attr:{d:"M3 12h14"},child:[]},{tag:"path",attr:{d:"M21 19V5"},child:[]}]})(props);
}
export default LuArrowLeftFromLine;
