import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RussianRuble icon from Lucide icons
 * @module
 */
export function LuRussianRuble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}},{tag:"path",attr:{d:"M6 15h8"},child:[]}]})(props);
}
export default LuRussianRuble;
