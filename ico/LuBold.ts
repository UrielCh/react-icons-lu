import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bold icon from Lucide icons
 * @module
 */
export function LuBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 12a4 4 0 0 0 0-8H6v8"}},{tag:"path",attr:{d:"M15 20a4 4 0 0 0 0-8H6v8Z"},child:[]}]})(props);
}
export default LuBold;
