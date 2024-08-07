import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mic icon from Lucide icons
 * @module
 */
export function LuMic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}},{tag:"path",attr:{d:"M19 10v2a7 7 0 0 1-14 0v-2"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"19","y2":"22"},child:[]}]})(props);
}
export default LuMic;
