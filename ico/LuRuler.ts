import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ruler icon from Lucide icons
 * @module
 */
export function LuRuler(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}},{tag:"path",attr:{d:"m14.5 12.5 2-2"},child:[]},{tag:"path",attr:{d:"m11.5 9.5 2-2"},child:[]},{tag:"path",attr:{d:"m8.5 6.5 2-2"},child:[]},{tag:"path",attr:{d:"m17.5 15.5 2-2"},child:[]}]})(props);
}
export default LuRuler;
