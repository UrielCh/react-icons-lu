import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bird icon from Lucide icons
 * @module
 */
export function LuBird(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 7h.01"}},{tag:"path",attr:{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"},child:[]},{tag:"path",attr:{d:"m20 7 2 .5-2 .5"},child:[]},{tag:"path",attr:{d:"M10 18v3"},child:[]},{tag:"path",attr:{d:"M14 17.75V21"},child:[]},{tag:"path",attr:{d:"M7 18a6 6 0 0 0 3.84-10.61"},child:[]}]})(props);
}
export default LuBird;
