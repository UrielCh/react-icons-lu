import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileVolume icon from Lucide icons
 * @module
 */
export function LuFileVolume(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"path",attr:{d:"m7 10-3 2H2v4h2l3 2v-8Z"},child:[]},{tag:"path",attr:{d:"M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3"},child:[]}]})(props);
}
export default LuFileVolume;
