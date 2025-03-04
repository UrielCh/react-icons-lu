import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileSearch icon from Lucide icons
 * @module
 */
export function LuFileSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attr:{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"},child:[]},{tag:"path",attr:{d:"m9 18-1.5-1.5"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"14","r":"3"},child:[]}]})(props);
}
export default LuFileSearch;
