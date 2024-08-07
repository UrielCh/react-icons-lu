import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cast icon from Lucide icons
 * @module
 */
export function LuCast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}},{tag:"path",attr:{d:"M2 12a9 9 0 0 1 8 8"},child:[]},{tag:"path",attr:{d:"M2 16a5 5 0 0 1 4 4"},child:[]},{tag:"line",attr:{"x1":"2","x2":"2.01","y1":"20","y2":"20"},child:[]}]})(props);
}
export default LuCast;
