import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shrink icon from Lucide icons
 * @module
 */
export function LuShrink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}},{tag:"path",attr:{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"},child:[]},{tag:"path",attr:{d:"M15 4.2V9m0 0h4.8M15 9l6-6"},child:[]},{tag:"path",attr:{d:"M9 4.2V9m0 0H4.2M9 9 3 3"},child:[]}]})(props);
}
export default LuShrink;
