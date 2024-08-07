import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PenTool icon from Lucide icons
 * @module
 */
export function LuPenTool(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 19 7-7 3 3-7 7-3-3z"}},{tag:"path",attr:{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"},child:[]},{tag:"path",attr:{d:"m2 2 7.586 7.586"},child:[]},{tag:"circle",attr:{"cx":"11","cy":"11","r":"2"},child:[]}]})(props);
}
export default LuPenTool;
