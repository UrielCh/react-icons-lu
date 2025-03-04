import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Combine icon from Lucide icons
 * @module
 */
export function LuCombine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 18H5a3 3 0 0 1-3-3v-1"}},{tag:"path",attr:{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"m7 21 3-3-3-3"},child:[]},{tag:"rect",attr:{x:"14",y:"14","width":"8","height":"8","rx":"2"},child:[]},{tag:"rect",attr:{x:"2",y:"2","width":"8","height":"8","rx":"2"},child:[]}]})(props);
}
export default LuCombine;
