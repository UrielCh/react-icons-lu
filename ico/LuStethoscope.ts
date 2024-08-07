import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stethoscope icon from Lucide icons
 * @module
 */
export function LuStethoscope(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"}},{tag:"path",attr:{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"10","r":"2"},child:[]}]})(props);
}
export default LuStethoscope;
