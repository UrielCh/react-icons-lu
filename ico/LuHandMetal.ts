import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HandMetal icon from Lucide icons
 * @module
 */
export function LuHandMetal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}},{tag:"path",attr:{d:"M14 11V9a2 2 0 1 0-4 0v2"},child:[]},{tag:"path",attr:{d:"M10 10.5V5a2 2 0 1 0-4 0v9"},child:[]},{tag:"path",attr:{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"},child:[]}]})(props);
}
export default LuHandMetal;
