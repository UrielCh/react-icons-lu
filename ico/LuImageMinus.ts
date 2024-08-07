import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ImageMinus icon from Lucide icons
 * @module
 */
export function LuImageMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}},{tag:"line",attr:{"x1":"16","x2":"22","y1":"5","y2":"5"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]},{tag:"path",attr:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"},child:[]}]})(props);
}
export default LuImageMinus;
