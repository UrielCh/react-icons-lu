import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ImageDown icon from Lucide icons
 * @module
 */
export function LuImageDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}},{tag:"path",attr:{d:"m14 19 3 3v-5.5"},child:[]},{tag:"path",attr:{d:"m17 22 3-3"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]}]})(props);
}
export default LuImageDown;
