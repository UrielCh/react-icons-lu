import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gavel icon from Lucide icons
 * @module
 */
export function LuGavel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"}},{tag:"path",attr:{d:"m16 16 6-6"},child:[]},{tag:"path",attr:{d:"m8 8 6-6"},child:[]},{tag:"path",attr:{d:"m9 7 8 8"},child:[]},{tag:"path",attr:{d:"m21 11-8-8"},child:[]}]})(props);
}
export default LuGavel;
