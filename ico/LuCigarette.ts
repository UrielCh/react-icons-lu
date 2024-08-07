import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cigarette icon from Lucide icons
 * @module
 */
export function LuCigarette(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 12H2v4h16"}},{tag:"path",attr:{d:"M22 12v4"},child:[]},{tag:"path",attr:{d:"M7 12v4"},child:[]},{tag:"path",attr:{d:"M18 8c0-2.5-2-2.5-2-5"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.5-2-2.5-2-5"},child:[]}]})(props);
}
export default LuCigarette;
