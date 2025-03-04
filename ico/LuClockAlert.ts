import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockAlert icon from Lucide icons
 * @module
 */
export function LuClockAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6v6l4 2"}},{tag:"path",attr:{d:"M16 21.16a10 10 0 1 1 5-13.516"},child:[]},{tag:"path",attr:{d:"M20 11.5v6"},child:[]},{tag:"path",attr:{d:"M20 21.5h.01"},child:[]}]})(props);
}
export default LuClockAlert;
