import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * XOctagon icon from Lucide icons
 * @module
 */
export function LuXOctagon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}},{tag:"path",attr:{d:"m15 9-6 6"},child:[]},{tag:"path",attr:{d:"m9 9 6 6"},child:[]}]})(props);
}
export default LuXOctagon;
