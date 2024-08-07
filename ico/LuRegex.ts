import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Regex icon from Lucide icons
 * @module
 */
export function LuRegex(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3v10"}},{tag:"path",attr:{d:"m12.67 5.5 8.66 5"},child:[]},{tag:"path",attr:{d:"m12.67 10.5 8.66-5"},child:[]},{tag:"path",attr:{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"},child:[]}]})(props);
}
export default LuRegex;
