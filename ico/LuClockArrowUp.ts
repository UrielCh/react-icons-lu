import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockArrowUp icon from Lucide icons
 * @module
 */
export function LuClockArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338"}},{tag:"path",attr:{d:"M12 6v6l1.562.781"},child:[]},{tag:"path",attr:{d:"m14 18 4-4 4 4"},child:[]},{tag:"path",attr:{d:"M18 22v-8"},child:[]}]})(props);
}
export default LuClockArrowUp;
