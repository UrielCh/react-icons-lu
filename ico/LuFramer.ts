import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Framer icon from Lucide icons
 * @module
 */
export function LuFramer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}}]})(props);
}
export default LuFramer;
