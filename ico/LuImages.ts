import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Images icon from Lucide icons
 * @module
 */
export function LuImages(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 22H4a2 2 0 0 1-2-2V6"}},{tag:"path",attr:{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"8","r":"2"},child:[]},{tag:"rect",attr:{"width":"16","height":"16",x:"6",y:"2","rx":"2"},child:[]}]})(props);
}
export default LuImages;
