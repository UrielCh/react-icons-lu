import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PilcrowLeft icon from Lucide icons
 * @module
 */
export function LuPilcrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v11"}},{tag:"path",attr:{d:"M14 9h-3a3 3 0 0 1 0-6h9"},child:[]},{tag:"path",attr:{d:"M18 3v11"},child:[]},{tag:"path",attr:{d:"M22 18H2l4-4"},child:[]},{tag:"path",attr:{d:"m6 22-4-4"},child:[]}]})(props);
}
export default LuPilcrowLeft;
