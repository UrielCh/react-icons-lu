import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gavel icon from Lucide icons
 * @module
 */
export function LuGavel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}},{tag:"path",attr:{d:"m16 16 6-6"},child:[]},{tag:"path",attr:{d:"m8 8 6-6"},child:[]},{tag:"path",attr:{d:"m9 7 8 8"},child:[]},{tag:"path",attr:{d:"m21 11-8-8"},child:[]}]})(props);
}
export default LuGavel;
