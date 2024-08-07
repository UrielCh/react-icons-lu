import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SaveAll icon from Lucide icons
 * @module
 */
export function LuSaveAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"}},{tag:"path",attr:{d:"M10 2v4h6"},child:[]},{tag:"path",attr:{d:"M18 18v-7h-8v7"},child:[]},{tag:"path",attr:{d:"M18 22H4a2 2 0 0 1-2-2V6"},child:[]}]})(props);
}
export default LuSaveAll;
