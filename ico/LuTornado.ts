import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tornado icon from Lucide icons
 * @module
 */
export function LuTornado(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 4H3"}},{tag:"path",attr:{d:"M18 8H6"},child:[]},{tag:"path",attr:{d:"M19 12H9"},child:[]},{tag:"path",attr:{d:"M16 16h-6"},child:[]},{tag:"path",attr:{d:"M11 20H9"},child:[]}]})(props);
}
export default LuTornado;
