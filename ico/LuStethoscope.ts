import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stethoscope icon from Lucide icons
 * @module
 */
export function LuStethoscope(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 2v2"}},{tag:"path",attr:{d:"M5 2v2"},child:[]},{tag:"path",attr:{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"},child:[]},{tag:"path",attr:{d:"M8 15a6 6 0 0 0 12 0v-3"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"10","r":"2"},child:[]}]})(props);
}
export default LuStethoscope;
