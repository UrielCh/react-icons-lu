import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Unplug icon from Lucide icons
 * @module
 */
export function LuUnplug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 5 3-3"}},{tag:"path",attr:{d:"m2 22 3-3"},child:[]},{tag:"path",attr:{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"},child:[]},{tag:"path",attr:{d:"M7.5 13.5 10 11"},child:[]},{tag:"path",attr:{d:"M10.5 16.5 13 14"},child:[]},{tag:"path",attr:{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"},child:[]}]})(props);
}
export default LuUnplug;
