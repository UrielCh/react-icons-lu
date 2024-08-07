import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Maximize icon from Lucide icons
 * @module
 */
export function LuMaximize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M21 8V5a2 2 0 0 0-2-2h-3"},child:[]},{tag:"path",attr:{d:"M3 16v3a2 2 0 0 0 2 2h3"},child:[]},{tag:"path",attr:{d:"M16 21h3a2 2 0 0 0 2-2v-3"},child:[]}]})(props);
}
export default LuMaximize;
