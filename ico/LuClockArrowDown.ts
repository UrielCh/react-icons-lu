import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockArrowDown icon from Lucide icons
 * @module
 */
export function LuClockArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227"}},{tag:"path",attr:{d:"M12 6v6l2 1"},child:[]},{tag:"path",attr:{d:"m14 18 4 4 4-4"},child:[]},{tag:"path",attr:{d:"M18 14v8"},child:[]}]})(props);
}
export default LuClockArrowDown;
