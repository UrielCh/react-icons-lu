import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Beaker icon from Lucide icons
 * @module
 */
export function LuBeaker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.5 3h15"}},{tag:"path",attr:{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"},child:[]},{tag:"path",attr:{d:"M6 14h12"},child:[]}]})(props);
}
export default LuBeaker;
