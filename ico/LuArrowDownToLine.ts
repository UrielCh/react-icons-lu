import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownToLine icon from Lucide icons
 * @module
 */
export function LuArrowDownToLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17V3"}},{tag:"path",attr:{d:"m6 11 6 6 6-6"},child:[]},{tag:"path",attr:{d:"M19 21H5"},child:[]}]})(props);
}
export default LuArrowDownToLine;
