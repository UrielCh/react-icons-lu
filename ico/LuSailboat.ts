import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sailboat icon from Lucide icons
 * @module
 */
export function LuSailboat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}},{tag:"path",attr:{d:"M21 14 10 2 3 14h18Z"},child:[]},{tag:"path",attr:{d:"M10 2v16"},child:[]}]})(props);
}
export default LuSailboat;
