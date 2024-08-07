import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TrendingUp icon from Lucide icons
 * @module
 */
export function LuTrendingUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"22 7 13.5 15.5 8.5 10.5 2 17"}},{tag:"polyline",attr:{"points":"16 7 22 7 22 13"},child:[]}]})(props);
}
export default LuTrendingUp;
