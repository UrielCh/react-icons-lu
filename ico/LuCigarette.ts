import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cigarette icon from Lucide icons
 * @module
 */
export function LuCigarette(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}},{tag:"path",attr:{d:"M18 8c0-2.5-2-2.5-2-5"},child:[]},{tag:"path",attr:{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.5-2-2.5-2-5"},child:[]},{tag:"path",attr:{d:"M7 12v4"},child:[]}]})(props);
}
export default LuCigarette;
