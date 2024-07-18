import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mic2 icon from Lucide icons
 * @module
 */
export function LuMic2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"}},{tag:"circle",attr:{"cx":"17","cy":"7","r":"5"},child:[]}]})(props);
}
export default LuMic2;
