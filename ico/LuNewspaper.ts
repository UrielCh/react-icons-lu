import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Newspaper icon from Lucide icons
 * @module
 */
export function LuNewspaper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}},{tag:"path",attr:{d:"M18 14h-8"},child:[]},{tag:"path",attr:{d:"M15 18h-5"},child:[]},{tag:"path",attr:{d:"M10 6h8v4h-8V6Z"},child:[]}]})(props);
}
export default LuNewspaper;
