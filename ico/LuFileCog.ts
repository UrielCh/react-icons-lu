import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileCog icon from Lucide icons
 * @module
 */
export function LuFileCog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"14","r":"3"},child:[]},{tag:"path",attr:{d:"M6 10v1"},child:[]},{tag:"path",attr:{d:"M6 17v1"},child:[]},{tag:"path",attr:{d:"M10 14H9"},child:[]},{tag:"path",attr:{d:"M3 14H2"},child:[]},{tag:"path",attr:{d:"m9 11-.88.88"},child:[]},{tag:"path",attr:{d:"M3.88 16.12 3 17"},child:[]},{tag:"path",attr:{d:"m9 17-.88-.88"},child:[]},{tag:"path",attr:{d:"M3.88 11.88 3 11"},child:[]}]})(props);
}
export default LuFileCog;
