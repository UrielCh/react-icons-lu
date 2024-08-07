import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Upload icon from Lucide icons
 * @module
 */
export function LuUpload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{"points":"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"3","y2":"15"},child:[]}]})(props);
}
export default LuUpload;
