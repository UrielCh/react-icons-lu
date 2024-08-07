import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Combine icon from Lucide icons
 * @module
 */
export function LuCombine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"8",x:"2",y:"2","rx":"2"}},{tag:"path",attr:{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"},child:[]},{tag:"path",attr:{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"},child:[]},{tag:"path",attr:{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1"},child:[]},{tag:"polyline",attr:{"points":"7 21 10 18 7 15"},child:[]},{tag:"rect",attr:{"width":"8","height":"8",x:"14",y:"14","rx":"2"},child:[]}]})(props);
}
export default LuCombine;
