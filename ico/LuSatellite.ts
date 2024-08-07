import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Satellite icon from Lucide icons
 * @module
 */
export function LuSatellite(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 7 9 3 5 7l4 4"}},{tag:"path",attr:{d:"m17 11 4 4-4 4-4-4"},child:[]},{tag:"path",attr:{d:"m8 12 4 4 6-6-4-4Z"},child:[]},{tag:"path",attr:{d:"m16 8 3-3"},child:[]},{tag:"path",attr:{d:"M9 21a6 6 0 0 0-6-6"},child:[]}]})(props);
}
export default LuSatellite;
