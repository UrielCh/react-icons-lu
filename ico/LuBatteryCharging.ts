import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryCharging icon from Lucide icons
 * @module
 */
export function LuBatteryCharging(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}},{tag:"path",attr:{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"},child:[]},{tag:"path",attr:{d:"m11 7-3 5h4l-3 5"},child:[]},{tag:"line",attr:{"x1":"22","x2":"22","y1":"11","y2":"13"},child:[]}]})(props);
}
export default LuBatteryCharging;
