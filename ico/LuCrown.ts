import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Crown icon from Lucide icons
 * @module
 */
export function LuCrown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"}}]})(props);
}
export default LuCrown;
