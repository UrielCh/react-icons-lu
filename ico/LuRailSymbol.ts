import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RailSymbol icon from Lucide icons
 * @module
 */
export function LuRailSymbol(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 15h14"}},{tag:"path",attr:{d:"M5 9h14"},child:[]},{tag:"path",attr:{d:"m14 20-5-5 6-6-5-5"},child:[]}]})(props);
}
export default LuRailSymbol;
