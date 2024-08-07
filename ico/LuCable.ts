import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cable icon from Lucide icons
 * @module
 */
export function LuCable(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"}},{tag:"path",attr:{d:"M3 5V3"},child:[]},{tag:"path",attr:{d:"M7 5V3"},child:[]},{tag:"path",attr:{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"},child:[]},{tag:"path",attr:{d:"M17 21v-2"},child:[]},{tag:"path",attr:{d:"M21 21v-2"},child:[]},{tag:"path",attr:{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"},child:[]}]})(props);
}
export default LuCable;
