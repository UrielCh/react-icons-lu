import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BluetoothOff icon from Lucide icons
 * @module
 */
export function LuBluetoothOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 17-5 5V12l-5 5"}},{tag:"path",attr:{d:"m2 2 20 20"},child:[]},{tag:"path",attr:{d:"M14.5 9.5 17 7l-5-5v4.5"},child:[]}]})(props);
}
export default LuBluetoothOff;
