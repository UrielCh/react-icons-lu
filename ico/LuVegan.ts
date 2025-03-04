import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Vegan icon from Lucide icons
 * @module
 */
export function LuVegan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8q6 0 6-6-6 0-6 6"}},{tag:"path",attr:{d:"M17.41 3.59a10 10 0 1 0 3 3"},child:[]},{tag:"path",attr:{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"},child:[]}]})(props);
}
export default LuVegan;
