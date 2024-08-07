import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StarOff icon from Lucide icons
 * @module
 */
export function LuStarOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}},{tag:"path",attr:{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
export default LuStarOff;
