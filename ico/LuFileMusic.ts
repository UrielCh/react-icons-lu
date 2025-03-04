import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileMusic icon from Lucide icons
 * @module
 */
export function LuFileMusic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"}},{tag:"path",attr:{d:"M8 18v-7.7L16 9v7"},child:[]},{tag:"circle",attr:{"cx":"14","cy":"16","r":"2"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"18","r":"2"},child:[]}]})(props);
}
export default LuFileMusic;
