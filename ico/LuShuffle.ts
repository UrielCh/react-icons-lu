import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shuffle icon from Lucide icons
 * @module
 */
export function LuShuffle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 14 4 4-4 4"}},{tag:"path",attr:{d:"m18 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"},child:[]},{tag:"path",attr:{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"},child:[]},{tag:"path",attr:{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"},child:[]}]})(props);
}
export default LuShuffle;
