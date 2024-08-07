import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TimerReset icon from Lucide icons
 * @module
 */
export function LuTimerReset(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2h4"}},{tag:"path",attr:{d:"M12 14v-4"},child:[]},{tag:"path",attr:{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"},child:[]},{tag:"path",attr:{d:"M9 17H4v5"},child:[]}]})(props);
}
export default LuTimerReset;
