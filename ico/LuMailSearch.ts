import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MailSearch icon from Lucide icons
 * @module
 */
export function LuMailSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]},{tag:"path",attr:{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"m22 22-1.5-1.5"},child:[]}]})(props);
}
export default LuMailSearch;
