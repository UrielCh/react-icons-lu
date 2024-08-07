import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * JapaneseYen icon from Lucide icons
 * @module
 */
export function LuJapaneseYen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}},{tag:"path",attr:{d:"M6 15h12"},child:[]},{tag:"path",attr:{d:"M6 11h12"},child:[]}]})(props);
}
export default LuJapaneseYen;
