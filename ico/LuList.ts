import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * List icon from Lucide icons
 * @module
 */
export function LuList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12h.01"}},{tag:"path",attr:{d:"M3 18h.01"},child:[]},{tag:"path",attr:{d:"M3 6h.01"},child:[]},{tag:"path",attr:{d:"M8 12h13"},child:[]},{tag:"path",attr:{d:"M8 18h13"},child:[]},{tag:"path",attr:{d:"M8 6h13"},child:[]}]})(props);
}
export default LuList;
