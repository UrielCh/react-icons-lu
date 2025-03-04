import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListCollapse icon from Lucide icons
 * @module
 */
export function LuListCollapse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 10 2.5-2.5L3 5"}},{tag:"path",attr:{d:"m3 19 2.5-2.5L3 14"},child:[]},{tag:"path",attr:{d:"M10 6h11"},child:[]},{tag:"path",attr:{d:"M10 12h11"},child:[]},{tag:"path",attr:{d:"M10 18h11"},child:[]}]})(props);
}
export default LuListCollapse;
