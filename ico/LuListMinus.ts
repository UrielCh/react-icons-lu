import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListMinus icon from Lucide icons
 * @module
 */
export function LuListMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 12H3"}},{tag:"path",attr:{d:"M16 6H3"},child:[]},{tag:"path",attr:{d:"M16 18H3"},child:[]},{tag:"path",attr:{d:"M21 12h-6"},child:[]}]})(props);
}
export default LuListMinus;
