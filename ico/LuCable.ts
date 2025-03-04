import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cable icon from Lucide icons
 * @module
 */
export function LuCable(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}},{tag:"path",attr:{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"},child:[]},{tag:"path",attr:{d:"M21 21v-2h-4"},child:[]},{tag:"path",attr:{d:"M3 5h4V3"},child:[]},{tag:"path",attr:{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"},child:[]}]})(props);
}
export default LuCable;
