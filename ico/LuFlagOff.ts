import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FlagOff icon from Lucide icons
 * @module
 */
export function LuFlagOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}},{tag:"path",attr:{d:"M4 22V4"},child:[]},{tag:"path",attr:{d:"M4 15s1-1 4-1 5 2 8 2"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
export default LuFlagOff;
