import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryWarning icon from Lucide icons
 * @module
 */
export function LuBatteryWarning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 17h.01"}},{tag:"path",attr:{d:"M10 7v6"},child:[]},{tag:"path",attr:{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M22 11v2"},child:[]},{tag:"path",attr:{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"},child:[]}]})(props);
}
export default LuBatteryWarning;
