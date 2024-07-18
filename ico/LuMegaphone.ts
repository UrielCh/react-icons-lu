import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Megaphone icon from Lucide icons
 * @module
 */
export function LuMegaphone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 11 18-5v12L3 14v-3z"}},{tag:"path",attr:{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"},child:[]}]})(props);
}
export default LuMegaphone;
