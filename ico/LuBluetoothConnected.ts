import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BluetoothConnected icon from Lucide icons
 * @module
 */
export function LuBluetoothConnected(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 7 10 10-5 5V2l5 5L7 17"}},{tag:"line",attr:{"x1":"18","x2":"21","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"3","x2":"6","y1":"12","y2":"12"},child:[]}]})(props);
}
export default LuBluetoothConnected;
