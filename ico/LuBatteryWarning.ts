import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryWarning icon from Lucide icons
 * @module
 */
export function LuBatteryWarning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"}},{tag:"path",attr:{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"},child:[]},{tag:"line",attr:{"x1":"22","x2":"22","y1":"11","y2":"13"},child:[]},{tag:"line",attr:{"x1":"10","x2":"10","y1":"7","y2":"13"},child:[]},{tag:"line",attr:{"x1":"10","x2":"10","y1":"17","y2":"17.01"},child:[]}]})(props);
}
export default LuBatteryWarning;
