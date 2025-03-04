import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BookImage icon from Lucide icons
 * @module
 */
export function LuBookImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}},{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"},child:[]},{tag:"circle",attr:{"cx":"10","cy":"8","r":"2"},child:[]}]})(props);
}
export default LuBookImage;
