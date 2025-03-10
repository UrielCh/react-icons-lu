import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ScrollText icon from Lucide icons
 * @module
 */
export function LuScrollText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 12h-5"}},{tag:"path",attr:{d:"M15 8h-5"},child:[]},{tag:"path",attr:{d:"M19 17V5a2 2 0 0 0-2-2H4"},child:[]},{tag:"path",attr:{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"},child:[]}]})(props);
}
export default LuScrollText;
