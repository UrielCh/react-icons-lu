import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Locate icon from Lucide icons
 * @module
 */
export function LuLocate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"5","y1":"12","y2":"12"}},{tag:"line",attr:{"x1":"19","x2":"22","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"2","y2":"5"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"19","y2":"22"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"7"},child:[]}]})(props);
}
export default LuLocate;
