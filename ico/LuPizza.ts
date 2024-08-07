import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pizza icon from Lucide icons
 * @module
 */
export function LuPizza(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 11h.01"}},{tag:"path",attr:{d:"M11 15h.01"},child:[]},{tag:"path",attr:{d:"M16 16h.01"},child:[]},{tag:"path",attr:{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16"},child:[]},{tag:"path",attr:{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"},child:[]}]})(props);
}
export default LuPizza;
