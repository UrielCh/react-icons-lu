import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TrendingDown icon from Lucide icons
 * @module
 */
export function LuTrendingDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"22 17 13.5 8.5 8.5 13.5 2 7"}},{tag:"polyline",attr:{"points":"16 17 22 17 22 11"},child:[]}]})(props);
}
export default LuTrendingDown;
