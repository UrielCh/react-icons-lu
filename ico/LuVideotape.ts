import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Videotape icon from Lucide icons
 * @module
 */
export function LuVideotape(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"path",attr:{d:"M2 8h20"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"14","r":"2"},child:[]},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"14","r":"2"},child:[]}]})(props);
}
export default LuVideotape;
