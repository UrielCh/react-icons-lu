import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Power icon from Lucide icons
 * @module
 */
export function LuPower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v10"}},{tag:"path",attr:{d:"M18.4 6.6a9 9 0 1 1-12.77.04"},child:[]}]})(props);
}
export default LuPower;
