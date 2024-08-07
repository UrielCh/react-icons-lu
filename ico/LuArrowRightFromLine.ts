import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRightFromLine icon from Lucide icons
 * @module
 */
export function LuArrowRightFromLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 5v14"}},{tag:"path",attr:{d:"M21 12H7"},child:[]},{tag:"path",attr:{d:"m15 18 6-6-6-6"},child:[]}]})(props);
}
export default LuArrowRightFromLine;
