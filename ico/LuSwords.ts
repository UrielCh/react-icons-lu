import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Swords icon from Lucide icons
 * @module
 */
export function LuSwords(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}},{tag:"line",attr:{"x1":"13","x2":"19","y1":"19","y2":"13"},child:[]},{tag:"line",attr:{"x1":"16","x2":"20","y1":"16","y2":"20"},child:[]},{tag:"line",attr:{"x1":"19","x2":"21","y1":"21","y2":"19"},child:[]},{tag:"polyline",attr:{"points":"14.5 6.5 18 3 21 3 21 6 17.5 9.5"},child:[]},{tag:"line",attr:{"x1":"5","x2":"9","y1":"14","y2":"18"},child:[]},{tag:"line",attr:{"x1":"7","x2":"4","y1":"17","y2":"20"},child:[]},{tag:"line",attr:{"x1":"3","x2":"5","y1":"19","y2":"21"},child:[]}]})(props);
}
export default LuSwords;
