import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BookKey icon from Lucide icons
 * @module
 */
export function LuBookKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}},{tag:"path",attr:{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"},child:[]},{tag:"circle",attr:{"cx":"14","cy":"8","r":"2"},child:[]},{tag:"path",attr:{d:"m20 2-4.5 4.5"},child:[]},{tag:"path",attr:{d:"m19 3 1 1"},child:[]}]})(props);
}
export default LuBookKey;
