import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sparkles icon from Lucide icons
 * @module
 */
export function LuSparkles(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attr:{d:"M5 3v4"},child:[]},{tag:"path",attr:{d:"M19 17v4"},child:[]},{tag:"path",attr:{d:"M3 5h4"},child:[]},{tag:"path",attr:{d:"M17 19h4"},child:[]}]})(props);
}
export default LuSparkles;
