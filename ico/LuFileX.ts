import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileX icon from Lucide icons
 * @module
 */
export function LuFileX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{"x1":"9.5","x2":"14.5","y1":"12.5","y2":"17.5"},child:[]},{tag:"line",attr:{"x1":"14.5","x2":"9.5","y1":"12.5","y2":"17.5"},child:[]}]})(props);
}
export default LuFileX;
