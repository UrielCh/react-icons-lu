import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ligature icon from Lucide icons
 * @module
 */
export function LuLigature(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}},{tag:"path",attr:{d:"M6 12h4"},child:[]},{tag:"path",attr:{d:"M14 12h2v8"},child:[]},{tag:"path",attr:{d:"M6 20h4"},child:[]},{tag:"path",attr:{d:"M14 20h4"},child:[]}]})(props);
}
export default LuLigature;
