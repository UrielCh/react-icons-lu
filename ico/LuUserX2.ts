import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserX2 icon from Lucide icons
 * @module
 */
export function LuUserX2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 19a6 6 0 0 0-12 0"}},{tag:"circle",attr:{"cx":"8","cy":"9","r":"4"},child:[]},{tag:"line",attr:{"x1":"17","x2":"22","y1":"8","y2":"13"},child:[]},{tag:"line",attr:{"x1":"22","x2":"17","y1":"8","y2":"13"},child:[]}]})(props);
}
export default LuUserX2;
