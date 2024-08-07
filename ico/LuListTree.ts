import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListTree icon from Lucide icons
 * @module
 */
export function LuListTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12h-8"}},{tag:"path",attr:{d:"M21 6H8"},child:[]},{tag:"path",attr:{d:"M21 18h-8"},child:[]},{tag:"path",attr:{d:"M3 6v4c0 1.1.9 2 2 2h3"},child:[]},{tag:"path",attr:{d:"M3 10v6c0 1.1.9 2 2 2h3"},child:[]}]})(props);
}
export default LuListTree;
