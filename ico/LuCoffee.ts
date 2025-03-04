import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Coffee icon from Lucide icons
 * @module
 */
export function LuCoffee(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v2"}},{tag:"path",attr:{d:"M14 2v2"},child:[]},{tag:"path",attr:{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M6 2v2"},child:[]}]})(props);
}
export default LuCoffee;
