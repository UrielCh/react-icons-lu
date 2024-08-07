import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shuffle icon from Lucide icons
 * @module
 */
export function LuShuffle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"}},{tag:"path",attr:{d:"m18 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2"},child:[]},{tag:"path",attr:{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"},child:[]},{tag:"path",attr:{d:"m18 14 4 4-4 4"},child:[]}]})(props);
}
export default LuShuffle;
