import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Snail icon from Lucide icons
 * @module
 */
export function LuSnail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}},{tag:"circle",attr:{"cx":"10","cy":"13","r":"8"},child:[]},{tag:"path",attr:{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"},child:[]},{tag:"path",attr:{d:"M18 3 19.1 5.2"},child:[]},{tag:"path",attr:{d:"M22 3 20.9 5.2"},child:[]}]})(props);
}
export default LuSnail;
