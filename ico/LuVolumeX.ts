import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VolumeX icon from Lucide icons
 * @module
 */
export function LuVolumeX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{tag:"line",attr:{"x1":"22","x2":"16","y1":"9","y2":"15"},child:[]},{tag:"line",attr:{"x1":"16","x2":"22","y1":"9","y2":"15"},child:[]}]})(props);
}
export default LuVolumeX;
