import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Wifi icon from Lucide icons
 * @module
 */
export function LuWifi(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 13a10 10 0 0 1 14 0"}},{tag:"path",attr:{d:"M8.5 16.5a5 5 0 0 1 7 0"},child:[]},{tag:"path",attr:{d:"M2 8.82a15 15 0 0 1 20 0"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12.01","y1":"20","y2":"20"},child:[]}]})(props);
}
export default LuWifi;
