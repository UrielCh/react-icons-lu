import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ParkingMeter icon from Lucide icons
 * @module
 */
export function LuParkingMeter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 15h2"}},{tag:"path",attr:{d:"M12 12v3"},child:[]},{tag:"path",attr:{d:"M12 19v3"},child:[]},{tag:"path",attr:{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"},child:[]},{tag:"path",attr:{d:"M9 9a3 3 0 1 1 6 0"},child:[]}]})(props);
}
export default LuParkingMeter;
