import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpToLine icon from Lucide icons
 * @module
 */
export function LuArrowUpToLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 3h14"}},{tag:"path",attr:{d:"m18 13-6-6-6 6"},child:[]},{tag:"path",attr:{d:"M12 7v14"},child:[]}]})(props);
}
export default LuArrowUpToLine;
