import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tags icon from Lucide icons
 * @module
 */
export function LuTags(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}},{tag:"path",attr:{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"},child:[]},{tag:"circle",attr:{"cx":"6.5","cy":"9.5","r":".5",fill:"currentColor"},child:[]}]})(props);
}
export default LuTags;
