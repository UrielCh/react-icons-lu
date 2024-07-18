import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Annoyed icon from Lucide icons
 * @module
 */
export function LuAnnoyed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M8 15h8"},child:[]},{tag:"path",attr:{d:"M8 9h2"},child:[]},{tag:"path",attr:{d:"M14 9h2"},child:[]}]})(props);
}
export default LuAnnoyed;
