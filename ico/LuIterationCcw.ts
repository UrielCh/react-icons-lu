import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * IterationCcw icon from Lucide icons
 * @module
 */
export function LuIterationCcw(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}},{tag:"polyline",attr:{"points":"16 14 20 18 16 22"},child:[]}]})(props);
}
export default LuIterationCcw;
