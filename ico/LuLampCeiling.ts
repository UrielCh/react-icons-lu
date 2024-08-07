import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LampCeiling icon from Lucide icons
 * @module
 */
export function LuLampCeiling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v5"}},{tag:"path",attr:{d:"M6 7h12l4 9H2l4-9Z"},child:[]},{tag:"path",attr:{d:"M9.17 16a3 3 0 1 0 5.66 0"},child:[]}]})(props);
}
export default LuLampCeiling;
