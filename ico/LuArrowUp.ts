import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUp icon from Lucide icons
 * @module
 */
export function LuArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m5 12 7-7 7 7"}},{tag:"path",attr:{d:"M12 19V5"},child:[]}]})(props);
}
export default LuArrowUp;
