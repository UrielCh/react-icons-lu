import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Minimize icon from Lucide icons
 * @module
 */
export function LuMinimize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3v3a2 2 0 0 1-2 2H3"}},{tag:"path",attr:{d:"M21 8h-3a2 2 0 0 1-2-2V3"},child:[]},{tag:"path",attr:{d:"M3 16h3a2 2 0 0 1 2 2v3"},child:[]},{tag:"path",attr:{d:"M16 21v-3a2 2 0 0 1 2-2h3"},child:[]}]})(props);
}
export default LuMinimize;
