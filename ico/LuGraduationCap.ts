import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GraduationCap icon from Lucide icons
 * @module
 */
export function LuGraduationCap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 10v6M2 10l10-5 10 5-10 5z"}},{tag:"path",attr:{d:"M6 12v5c3 3 9 3 12 0v-5"},child:[]}]})(props);
}
export default LuGraduationCap;
