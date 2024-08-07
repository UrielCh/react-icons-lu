import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Expand icon from Lucide icons
 * @module
 */
export function LuExpand(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}},{tag:"path",attr:{d:"M3 16.2V21m0 0h4.8M3 21l6-6"},child:[]},{tag:"path",attr:{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"},child:[]},{tag:"path",attr:{d:"M3 7.8V3m0 0h4.8M3 3l6 6"},child:[]}]})(props);
}
export default LuExpand;
