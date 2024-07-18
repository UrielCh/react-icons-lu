import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextQuote icon from Lucide icons
 * @module
 */
export function LuTextQuote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 6H3"}},{tag:"path",attr:{d:"M21 12H8"},child:[]},{tag:"path",attr:{d:"M21 18H8"},child:[]},{tag:"path",attr:{d:"M3 12v6"},child:[]}]})(props);
}
export default LuTextQuote;
