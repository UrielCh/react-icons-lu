import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Clock3 icon from Lucide icons
 * @module
 */
export function LuClock3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"12 6 12 12 16.5 12"},child:[]}]})(props);
}
export default LuClock3;
