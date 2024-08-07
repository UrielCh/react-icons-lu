import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ScatterChart icon from Lucide icons
 * @module
 */
export function LuScatterChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"7.5","cy":"7.5","r":".5"}},{tag:"circle",attr:{"cx":"18.5","cy":"5.5","r":".5"},child:[]},{tag:"circle",attr:{"cx":"11.5","cy":"11.5","r":".5"},child:[]},{tag:"circle",attr:{"cx":"7.5","cy":"16.5","r":".5"},child:[]},{tag:"circle",attr:{"cx":"17.5","cy":"14.5","r":".5"},child:[]},{tag:"path",attr:{d:"M3 3v18h18"},child:[]}]})(props);
}
export default LuScatterChart;
