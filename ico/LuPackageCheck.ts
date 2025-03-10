import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PackageCheck icon from Lucide icons
 * @module
 */
export function LuPackageCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 16 2 2 4-4"}},{tag:"path",attr:{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"},child:[]},{tag:"path",attr:{d:"m7.5 4.27 9 5.15"},child:[]},{tag:"polyline",attr:{"points":"3.29 7 12 12 20.71 7"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"12"},child:[]}]})(props);
}
export default LuPackageCheck;
