import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FilePieChart icon from Lucide icons
 * @module
 */
export function LuFilePieChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"path",attr:{d:"M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29"},child:[]},{tag:"path",attr:{d:"M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z"},child:[]}]})(props);
}
export default LuFilePieChart;
