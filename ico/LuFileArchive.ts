import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileArchive icon from Lucide icons
 * @module
 */
export function LuFileArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"circle",attr:{"cx":"10","cy":"20","r":"2"},child:[]},{tag:"path",attr:{d:"M10 7V6"},child:[]},{tag:"path",attr:{d:"M10 12v-1"},child:[]},{tag:"path",attr:{d:"M10 18v-2"},child:[]}]})(props);
}
export default LuFileArchive;
