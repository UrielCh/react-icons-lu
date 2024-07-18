import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Space icon from Lucide icons
 * @module
 */
export function LuSpace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}}]})(props);
}
export default LuSpace;
