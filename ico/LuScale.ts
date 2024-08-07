import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Scale icon from Lucide icons
 * @module
 */
export function LuScale(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}},{tag:"path",attr:{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"},child:[]},{tag:"path",attr:{d:"M7 21h10"},child:[]},{tag:"path",attr:{d:"M12 3v18"},child:[]},{tag:"path",attr:{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"},child:[]}]})(props);
}
export default LuScale;
