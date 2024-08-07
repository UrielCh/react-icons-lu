import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gauge icon from Lucide icons
 * @module
 */
export function LuGauge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 14 4-4"}},{tag:"path",attr:{d:"M3.34 19a10 10 0 1 1 17.32 0"},child:[]}]})(props);
}
export default LuGauge;
