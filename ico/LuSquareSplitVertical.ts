import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareSplitVertical icon from Lucide icons
 * @module
 */
export function LuSquareSplitVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}},{tag:"path",attr:{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"},child:[]},{tag:"line",attr:{"x1":"4","x2":"20","y1":"12","y2":"12"},child:[]}]})(props);
}
export default LuSquareSplitVertical;
