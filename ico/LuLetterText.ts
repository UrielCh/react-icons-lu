import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterText icon from Lucide icons
 * @module
 */
export function LuLetterText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 12h6"}},{tag:"path",attr:{d:"M15 6h6"},child:[]},{tag:"path",attr:{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"},child:[]},{tag:"path",attr:{d:"M3 18h18"},child:[]},{tag:"path",attr:{d:"M4 11h6"},child:[]}]})(props);
}
export default LuLetterText;
